package com.codestates.question.repository;

import com.codestates.question.entity.Question;
import com.codestates.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long>{

    Optional<Question> findByQuestionId(long questionId);
}
