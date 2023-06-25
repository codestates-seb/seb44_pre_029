/*
package com.codestates.security.oauth.handler;


import com.codestates.security.jwt.JwtTokenizer;
import com.codestates.security.jwt.filter.JwtAuthenticationFilter;
import com.codestates.security.oauth.CustomOAuth2User;
import com.codestates.user.UserRepository;
import com.codestates.user.enums.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserRepository userRepository;



    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        try{
            CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
            if(oAuth2User.getRole() != Role.USER){

                String accessToken = jwtAuthenticationFilter.delegateAccessToken(oAuth2User);
                response.addHeader();
            }
        }
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

    }
}
*/
