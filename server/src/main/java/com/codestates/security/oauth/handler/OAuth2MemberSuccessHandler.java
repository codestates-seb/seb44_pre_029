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

        User user = saveMember(email, nickname);

//        Long userId = userRepository.findUserIdbyEmail(email);

        redirect(request, response, user);  // (6)
    }

    private User saveMember(String email, String nickname) {
        if(!verifyExistsEmail(email)) {
            User user = new User(email, nickname, "12345678");

            List<String> roles = authorityUtils.createRoles(user.getEmail());
            user.setRoles(roles);
            User saveuser = userRepository.save(user);
            return saveuser;
        }
        return userRepository.findByEmail(email).orElse(null);
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, User user) throws IOException {
        String accessToken = delegateAccessToken(user);  // (6-1)
        String refreshToken = delegateRefreshToken(user);     // (6-2)

        String uri = createURI(accessToken, refreshToken).toString();   // (6-3)
        getRedirectStrategy().sendRedirect(request, response, uri);   // (6-4)
    }

    private String delegateAccessToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", user.getEmail());
        claims.put("roles", user.getRoles());
        claims.put("userId", user.getUserId());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(User user) {
        String subject = user.getEmail();
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