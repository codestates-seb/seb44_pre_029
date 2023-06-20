package com.codestates.security.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@Getter
public class TokenResponseDto {
    private Long userId;
    private Integer accessTokenExpirationMinutes;
    private String accessToken;
    private String refreshToken;
}
