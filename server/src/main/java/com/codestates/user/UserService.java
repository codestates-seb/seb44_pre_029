package com.codestates.user;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public User createUser(User user){
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        return savedUser;
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

    private void verifyExistsEmail(String email){
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if(optionalUser.isPresent()){
            throw new BusinessLogicException(ExceptionCode.USER_EXIST);
        }
    }


}
