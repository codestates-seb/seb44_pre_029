package com.codestates.user;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> findByEmail(String email);
    Optional<User> findByUserid(long userid);


    //최신순 페이지네이션
    Page<User> findAllByOrderByUseridDesc(Pageable pageable);


}
