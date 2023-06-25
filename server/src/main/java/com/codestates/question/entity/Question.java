package com.codestates.question.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.like.Like;
import com.codestates.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String body;

    @Column(nullable = false) // 답변여부
    private boolean isAnswered;

    @Column(nullable = false) // 채택여부
    private boolean isSelected;

    @Column
    private int viewCount;

    @Column
    private int answerCount;

    @Column(nullable = false)
    private LocalDateTime createAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Like> likes;
}
