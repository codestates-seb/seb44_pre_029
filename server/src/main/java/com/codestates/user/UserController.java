package com.codestates.user;

import com.codestates.user.dto.UserPatchDto;
import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

//api 변경 필요, 인메모리 db필요, repository 및 페이지 요청에 맞는 service메소드 만들기
@RestController
@RequestMapping("/users")
@Validated
public class UserController {
    private final static String USER_URL = "/users";
    private final UserService userService;
    private final UserMapper userMapper;
    public UserController(UserService userService, UserMapper userMapper){
        this.userService = userService;
        this.userMapper = userMapper;
    }
    @PostMapping
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){
        User response = userService.createUser(userMapper.userPostDtoToUser(userPostDto));

        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    //해당 이메일 유저의 이메일 비밀번호 닉네임 변경
    //데이터베이스 구축 이후 uri user_id로 변경
    @PatchMapping("/{userid}")
    public ResponseEntity patchUser(@Valid @PathVariable("userid") long userid,
                                    @Valid @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserid(userid);
        User response = userService.updateUser(userMapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{userid}")
    public ResponseEntity getUser(@PathVariable("userid") long userid){
        User response = userService.findUser(userid);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(){
        List<User> users = userService.findUsers();
        List<UserResponseDto> response =
                users.stream()
                        .map(user -> userMapper.userToUserResponseDto(user))
                        .collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{userid}")
    public ResponseEntity deleteUser(@PathVariable("userid") long userid){
        userService.deleteUser(userid);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
