package com.codestates.answer.controller;

import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import com.codestates.question.service.QuestionService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private final static String Answer_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final QuestionService questionService;

    public AnswerController(AnswerService answerService,
                            AnswerMapper mapper,
                            QuestionService questionService) {
        this.answerService = answerService;
        this.mapper = mapper;
        this.questionService = questionService;
    }
}
