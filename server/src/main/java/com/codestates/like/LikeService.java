package com.codestates.like;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LikeService {

    private final LikeRepository likeRepository;



    public Like CreateLike(Like like) {

        Like savedLike = likeRepository.save(like);

        return savedLike;
    }

    public Like DeleteLike(Like like){

        Like deletedlike = findQuestionUserId(like);

        likeRepository.delete(deletedlike);

        return deletedlike;

    }

    public Like findQuestionUserId(Like like) {
        Optional<Like> optionalLike =
                likeRepository.findAllByQuestionAndUser(like.getQuestion(), like.getUser());

        Like findQestionUserid =
                optionalLike.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.LIKE_NOT_FOUND));

        return findQestionUserid;
    }


}
