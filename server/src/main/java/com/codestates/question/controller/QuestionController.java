package com.codestates.question.controller;

import com.codestates.response.MultiResponseDto;
import com.codestates.question.dto.QuestionDto;
import com.codestates.question.entity.Question;
import com.codestates.question.mapper.QuestionMapper;
import com.codestates.question.service.QuestionService;
import com.codestates.response.PageInfo;
import com.codestates.response.QuestionPageResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final static String Question_DEFAULT_URL = "/questions";
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService,
                              QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/create")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post questionPostDto,
                                       Authentication authentication) {

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long userId = ((Number) principal.get("userId")).longValue();
        questionPostDto.setUserId(userId);
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        return new ResponseEntity<>(mapper.questionToQuestionPOSTResponseDto(question), HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch questionPatchDto,
                                        Authentication authentication) {
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long userId = ((Number) principal.get("userId")).longValue();

        long findUserId = questionService.findQuestion(questionId).getUser().getUserId();
        if(userId != findUserId) return new ResponseEntity<>(HttpStatus.FORBIDDEN);

        questionPatchDto.setQuestionId(questionId);
        questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(mapper.questionToQuestionGETResponseDto(question), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> QuestionPage = questionService.findQuestions(page - 1, size);
        PageInfo pageInfo = new PageInfo(page, size,(int)QuestionPage.getTotalElements(), QuestionPage.getTotalPages());
        List<Question>questions = QuestionPage.getContent();


        List<QuestionDto.GETResponse> response =
                questions.stream()
                        .map(question-> mapper.questionToQuestionGETResponseDto(question))
                        .collect(Collectors.toList());


        return new ResponseEntity<>(new QuestionPageResponseDto(response, pageInfo), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId,
                                         Authentication authentication) {
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long userId = ((Number) principal.get("userId")).longValue();

        long findUserId = questionService.findQuestion(questionId).getUser().getUserId();
        if(userId != findUserId) return new ResponseEntity<>(HttpStatus.FORBIDDEN);

        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
