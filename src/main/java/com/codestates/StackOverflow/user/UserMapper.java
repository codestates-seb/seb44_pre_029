package com.codestates.StackOverflow.user;

import com.codestates.StackOverflow.user.dto.UserPatchDto;
import com.codestates.StackOverflow.user.dto.UserPostDto;
import com.codestates.StackOverflow.user.dto.UserResponseDto;
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
        return new UserResponseDto(user.getEmail(),
                user.getNickname(),
                user.getPassword());
    }
}
