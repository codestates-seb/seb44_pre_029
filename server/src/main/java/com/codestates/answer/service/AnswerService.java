package com.codestates.answer.service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.question.entity.Question;
import com.codestates.question.service.QuestionService;
import com.codestates.user.User;
import com.codestates.user.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserService userService;

    public AnswerService(AnswerRepository answerRepository,
                         QuestionService questionService,
                         UserService userService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.userService = userService;
    }

    public Answer CreateAnswer(Answer answer) {
        long userId = answer.getUser().getUserId();
        User user = userService.findUser(userId);

        answer.setUser(user);

        Question findQuestion = questionService.findQuestion(answer.getQuestion().getQuestionId());
        int updateAnswerCount = findQuestion.getAnswerCount() + 1;
        findQuestion.setAnswerCount(updateAnswerCount);

        if(findQuestion.isAnswered() == false) findQuestion.setAnswered(true);
        questionService.updateQuestion(findQuestion);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getBody())
                .ifPresent(answerBody -> findAnswer.setBody(answerBody));

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId){
        return findVerifiedAnswer(answerId);
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        Question findQuestion = questionService.findQuestion(findAnswer.getQuestion().getQuestionId());
        int updateAnswerCount = findQuestion.getAnswerCount() - 1;
        findQuestion.setAnswerCount(updateAnswerCount);

        if(findQuestion.getAnswerCount() == 0) findQuestion.setAnswered(false);
        questionService.updateQuestion(findQuestion);
        answerRepository.delete(findAnswer);
    }

    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
