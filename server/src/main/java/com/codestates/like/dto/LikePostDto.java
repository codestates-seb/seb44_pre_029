package com.codestates.like.dto;

import com.codestates.question.entity.Question;
import com.codestates.user.User;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class LikePostDto {

    private long likeId;
    private User user;
    private Question question;

    private long checklike;



}
