package com.codestates.StackOverflow.user;

import org.springframework.stereotype.Service;

import java.lang.reflect.Member;
import java.util.List;
@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public User createUser(User user){


        return userRepository.save(user);
    }

    public User updateUser(User user){
        User updatedUser = user;
        return updatedUser;
    }

    public User findUser(long user_id){
        User user = new User("email", "","");
        return user;
    }

    public List<User> findUsers(){
        List<User> users = List.of(
                new User("hgd@gmail.com", "홍길동", "015678"),
                new User("lml@gmail.com", "이몽룡", "010222")
        );
        return users;
    }
    public User deleteUser(long user_id){
        User user = new User("","","");

        return null;




    }




}
