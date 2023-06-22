package com.codestates.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponseDto {
    private long userid;
    private String email;
    private String nickname;
    private String password;
}
