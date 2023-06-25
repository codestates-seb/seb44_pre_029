package com.codestates.like;


import com.codestates.like.dto.LikeDeleteDto;
import com.codestates.like.dto.LikePostDto;
import com.codestates.like.dto.LikeResponseDto;
import org.springframework.stereotype.Component;


@Component
public class LikeMapper {
    public Like likePostDtoToLike(LikePostDto likePostDto){

        return new Like(
                likePostDto.getUser(),
                likePostDto.getQuestion(),
                likePostDto.getChecklike()
                );
    }

    public Like likeDeleteDtoToLike(LikeDeleteDto likeDeleteDto){
        return new Like(
                likeDeleteDto.getUser(),
                likeDeleteDto.getQuestion(),
                likeDeleteDto.getChecklike());
    }


    public LikeResponseDto likeToLikeResponseDto(Like like){
        return new LikeResponseDto(
                like.getLikeId(),
                like.getUser().getUserId(),
                like.getQuestion().getQuestionId(),
                like.getChecklike());
    }


}
