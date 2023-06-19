package com.codestates.StackOverflow.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "USERSS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false, unique = true, name = "user_id")
    private long user_id;
    @Column(length = 50, nullable = false, updatable = true, unique = true, name = "email")
    private String email;
    @Column(length = 12, nullable = false, updatable = true, unique = true, name = "nickname")
    private String nickname;
    @Column(length = 12, nullable = false, updatable = true, unique = false, name = "password")
    private String password;

    public User(String email, String nickname, String password){
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }

}
