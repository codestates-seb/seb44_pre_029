package com.codestates.user;

import com.codestates.user.dto.UserPatchDto;
import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User userPostDtoToUser(UserPostDto userPostDto){
        return new User(
                userPostDto.getEmail(),
                userPostDto.getNickname(),
                userPostDto.getPassword());
    }

    public User userPatchDtoToUser(UserPatchDto userPatchDto){
        return new User(
                userPatchDto.getEmail(),
                userPatchDto.getNickname(),
                userPatchDto.getPassword());
    }
    public UserResponseDto userToUserResponseDto(User user){
        return new UserResponseDto(user.getUserid(),
                user.getEmail(),
                user.getNickname(),
                user.getPassword());
    }
}
