package com.codestates.security.oauth.handler;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.security.jwt.JwtTokenizer;
import com.codestates.security.utils.CustomAuthorityUtils;
import com.codestates.user.User;
import com.codestates.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.*;

@RequiredArgsConstructor
public class OAuth2MemberSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User)authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email")); // (3)
        List<String> authorities = authorityUtils.createRoles(email);           // (4)

        String nickname = String.valueOf(oAuth2User.getAttributes().get("name"));

        saveMember(email, nickname);

//        Long userId = userRepository.findUseridbyEmail(email);

        redirect(request, response, email, authorities);  // (6)
    }

    private void saveMember(String email, String nickname) {
        if(!verifyExistsEmail(email)) {
            User user = new User(email, nickname, "12345678");

            List<String> roles = authorityUtils.createRoles(user.getEmail());
            user.setRoles(roles);

            userRepository.save(user);
        }
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, String username, List<String> authorities) throws IOException {
        String accessToken = delegateAccessToken(username, authorities);  // (6-1)
        String refreshToken = delegateRefreshToken(username);     // (6-2)

        String uri = createURI(accessToken, refreshToken).toString();   // (6-3)
        getRedirectStrategy().sendRedirect(request, response, uri);   // (6-4)
    }

    private String delegateAccessToken(String email, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", email);
        claims.put("roles", authorities);
/*        claims.put("userId", userId);*/

        String subject = email;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(String email) {
        String subject = email;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
                .port(3000)
                .path("/home")
                .queryParams(queryParams)
                .build()
                .toUri();
    }

    private boolean verifyExistsEmail(String email){
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.isPresent();
    }
}