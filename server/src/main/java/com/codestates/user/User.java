package com.codestates.user;


import com.codestates.like.Like;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "USERSS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false, unique = true, name = "user_id")
    private long userId;
    @Column(length = 50, nullable = false, updatable = true, unique = true, name = "email")
    private String email;
    @Column(length = 50, nullable = false, updatable = true, unique = false, name = "nickname")
    private String nickname;
    @Column(nullable = false, updatable = true, unique = false, name = "password")
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Like> likes;

    public User(String email, String nickname, String password){
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }

}
