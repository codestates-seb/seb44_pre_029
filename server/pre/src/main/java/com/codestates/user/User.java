package com.codestates.user;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "USERSS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "userid")
    private long userid;
    @Column(length = 50, updatable = true, unique = true, name = "email")
    private String email;
    @Column(length = 12,  updatable = true, name = "nickname")
    private String nickname;
    @Column(length = 12, updatable = true, unique = false, name = "password")
    private String password;

    public User(long userid, String email, String nickname, String password){
        this.userid =  userid;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }



}
