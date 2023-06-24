package com.codestates.user;

import com.codestates.Exception.BusinessLogicException;
import com.codestates.Exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    //회원가입
    public User createUser(User user){
        verifyEmail(user.getEmail());


        return userRepository.save(user);
    }

    //회원 프로필 변경
    public User updateUser(User user){
        User findUser = findVerifiedUser(user.getUserid());
        Optional.of(user.getEmail())
                .ifPresent(email -> findUser.setEmail(email));
        Optional.of(user.getNickname())
                .ifPresent(nickname -> findUser.setNickname(nickname));
        Optional.of(user.getPassword())
                .ifPresent(password -> findUser.setPassword(passwordEncoder.encode(password)));

        return userRepository.save(findUser);
    }

    //회원 정보 조회
    public User findUser(long userid){

        return findVerifiedUser(userid);
    }

    //모든 회원 정보 조회
    public List<User> findUsers(){
        return (List<User>) userRepository.findAll();
    }

    //회원 삭제
    public void deleteUser(long userid) {
        User findUser = findVerifiedUser(userid);

        userRepository.delete(findUser);
    }

    //유저 정보 검색
    public User findVerifiedUser(long userid) {
        Optional<User> optionalUser =
                userRepository.findByUserid(userid);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }
    //이미 존재하는 이메일인지 검색. 있으면 로그인
    public User findUserEmail(String email){
        Optional<User> optionalUser =
                userRepository.findByEmail(email);
        User findUser =
                optionalUser.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    //이미 존재하는 이메일인지 검색. 있으면 회원가입 불가
    private void verifyEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

    //최신순 페이지네이션
    public Page<User> findPageUsers(int page, int size){
        PageRequest pageRequest = PageRequest.of(page, size);
        return userRepository.findAllByOrderByUseridDesc(pageRequest);
    }

}
