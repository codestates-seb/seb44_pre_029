package com.codestates.StackOverflow.question.service;

import com.codestates.StackOverflow.exception.BusinessLogicException;
import com.codestates.StackOverflow.exception.ExceptionCode;
import com.codestates.StackOverflow.question.dto.QuestionUserResponseDto;
import com.codestates.StackOverflow.question.entity.Question;
import com.codestates.StackOverflow.question.repository.QuestionRepository;
import com.codestates.StackOverflow.user.User;
import com.codestates.StackOverflow.user.UserService;
import net.bytebuddy.asm.Advice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserService userService;

    public QuestionService(QuestionRepository questionRepository,
                           UserService userService) {
        this.questionRepository = questionRepository;
        this.userService = userService;
    }

    public Question createQuestion(Question question) {
        long userId = question.getUser().getUser_id();
        User user = userService.findUser(userId);
        question.setUser(user);

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(questionTitle -> findQuestion.setTitle(questionTitle));
        Optional.ofNullable(question.getBody())
                .ifPresent(questionBody -> findQuestion.setBody(questionBody));
        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        Question findQuestion = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        int updateViewCount = findQuestion.getViewCount() + 1;
        findQuestion.setViewCount(updateViewCount);
        Question updateQuestion = questionRepository.save(findQuestion);

        return updateQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
