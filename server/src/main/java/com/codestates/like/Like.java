package com.codestates.like;

import com.codestates.question.entity.Question;
import com.codestates.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;



@Getter
@Setter
@NoArgsConstructor
@Entity(name = "likess")

public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "likeId")
    private long likeId;



    @Column(name = "checklike")
    private long checklike;


    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "userId")
    private User user;


    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "questionId")
    private Question question;

    public void User(long userId) {
        this.user = user;
    }


    public Like(User user, Question question, long checklike){

        this.user = user;
        this.question = question;
        this.checklike = checklike;

    }

}
