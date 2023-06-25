package com.codestates.like.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LikeResponseDto {
    private long likeId;
    private long userId;
    private long questionId;
    private long checklike;

}
