package com.codestates.StackOverflow.question.controller;

import com.codestates.StackOverflow.dto.MultiResponseDto;
import com.codestates.StackOverflow.question.dto.QuestionDto;
import com.codestates.StackOverflow.question.entity.Question;
import com.codestates.StackOverflow.question.mapper.QuestionMapper;
import com.codestates.StackOverflow.question.service.QuestionService;
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

    @PostMapping("/add")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post questionPostDto,
                                       Authentication authentication) {
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long userId = ((Number) principal.get("user_id")).longValue();
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

        long findUserId = questionService.findQuestion(questionId).getUser().getUser_id();
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
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question>questions = pageQuestions.getContent();

        List<QuestionDto.GETAllResponse> questionResponseDtos = mapper.questionToQuestionGetAllResponse(questions);
        return new ResponseEntity<>(new MultiResponseDto(questionResponseDtos, pageQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId,
                                         Authentication authentication) {
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long userId = ((Number) principal.get("userId")).longValue();

        long findUserId = questionService.findQuestion(questionId).getUser().getUser_id();
        if(userId != findUserId) return new ResponseEntity<>(HttpStatus.FORBIDDEN);

        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
