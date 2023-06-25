package com.codestates.like;

import com.codestates.question.entity.Question;
import com.codestates.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Long> {



    Optional<Like> findAllByQuestionAndUser(Question question, User user);

}