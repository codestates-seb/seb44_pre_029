package com.codestates.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT u FROM User u WHERE u.user_id = :user_id")
    User findByUser(long user_id);

    Optional<User> findByEmail(String email);
}