package com.codestates.user;

import com.codestates.response.PageInfo;
import com.codestates.user.dto.UserPageResponseDto;
import com.codestates.user.dto.UserPatchDto;
import com.codestates.user.dto.UserPostDto;
import com.codestates.user.dto.UserResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;
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
    @PatchMapping("/edit/{userId}")
    public ResponseEntity patchUser(@Valid @PathVariable("userId") long userId,
                                    @Valid @RequestBody UserPatchDto userPatchDto,
                                    Authentication authentication){
        Map<String,Object> principal = (Map) authentication.getPrincipal();
        long authuserId = ((Number) principal.get("userId")).longValue();

        if(authuserId != userId){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        userPatchDto.setUserId(userId);
        User response = userService.updateUser(userMapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUser(@PathVariable("userId") long userId){
        User response = userService.findUser(userId);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getPageUsers(@Positive @RequestParam("page") int page,
                                       @Positive @RequestParam("size") int size){
        Page<User> userPage = userService.findPageUsers(page-1, size);
        PageInfo pageInfo = new PageInfo(page, size,(int)userPage.getTotalElements(), userPage.getTotalPages());

        List<User> users = userPage.getContent();
        List<UserResponseDto> response =
                users.stream()
                        .map(user-> userMapper.userToUserResponseDto(user))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(new UserPageResponseDto(response, pageInfo),HttpStatus.OK);

    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") long userId,
                                     Authentication authentication){
        Map<String,Object> principal = (Map) authentication.getPrincipal();
        long authuserId = ((Number) principal.get("userId")).longValue();

        if(authuserId != userId){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
