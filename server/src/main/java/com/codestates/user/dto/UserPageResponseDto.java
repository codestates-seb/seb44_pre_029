package com.codestates.user.dto;

import com.codestates.user.PageInfo;
import com.codestates.user.User;
import lombok.Getter;

import java.util.List;

@Getter

public class UserPageResponseDto {
    private List<UserResponseDto> data;
    private PageInfo pageInfo;

    public UserPageResponseDto(List<UserResponseDto> data, PageInfo pageInfo){
        this.data = data;
        this.pageInfo = pageInfo;
    }
}
