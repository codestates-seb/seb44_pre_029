package com.codestates.user.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserPatchDto {
    @NotBlank
    @Pattern(regexp = "^([0-9])$")
    private long user_id;
    @NotBlank
    @Pattern(regexp = "^([a-zA-Z0-9@.]{8,20})$")
    @Email
    private String email;
    @NotBlank
    @Pattern(regexp = "^([a-zA-Z0-9가-힣]{2,12})$")
    private String nickname;
    @NotBlank
    @Pattern(regexp = "^([a-zA-Z0-9!@#$%^&*]{8,12})$")
    private String password;

    public long getUser_id() {
        return user_id;
    }

    public void setEmail(long user_id){
        this.user_id = user_id;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
