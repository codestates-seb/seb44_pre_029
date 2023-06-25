package com.codestates.like;

import com.codestates.like.dto.LikePostDto;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.user.User;
import com.codestates.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Map;

@RestController
@RequestMapping("/questions")
@Validated
@CrossOrigin
public class LikeController {
    private final LikeService likeService;
    private final LikeMapper likeMapper;
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;

    public LikeController(LikeService likeService, LikeMapper likeMapper, UserRepository userRepository, QuestionRepository questionRepository) {
        this.likeService = likeService;
        this.likeMapper = likeMapper;
        this.userRepository = userRepository;
        this.questionRepository = questionRepository;
    }

    @PostMapping("/{questionid}/like")
    public ResponseEntity postLike(@PathVariable("questionid") @Positive long questionid,
                                   @Valid @RequestBody LikePostDto likePostDto,
                                   Authentication authentication) {
        Map<String, Object> principal = (Map) authentication.getPrincipal();

        User user = userRepository.findByUserId(((Number) principal.get("userId")).longValue()).orElse(null);
        Question question = questionRepository.findByQuestionId(questionid).orElse(null);

        long check = likePostDto.getChecklike();
        likePostDto.setUser(user);
        likePostDto.setQuestion(question);

        Like response = likeMapper.likePostDtoToLike(likePostDto);

        if (check == 1) {
            likeService.CreateLike(response);
        }
        else if (check ==0) {
            likeService.DeleteLike(response);
        }

        return new ResponseEntity(likeMapper.likeToLikeResponseDto(response), HttpStatus.OK);

    }
}
