package com.codestates.security.jwt.dto;

import lombok.Getter;

@Getter
public class LoginDto {
    private String username;
    private String password;
}