package com.codestates.StackOverflow.question.repository;

import com.codestates.StackOverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long>{
}
