package com.codestates.StackOverflow.question.mapper;

import com.codestates.StackOverflow.answer.entity.Answer;
import com.codestates.StackOverflow.question.dto.QuestionAnswerResponseDto;
import com.codestates.StackOverflow.question.dto.QuestionDto;
import com.codestates.StackOverflow.question.dto.QuestionUserResponseDto;
import com.codestates.StackOverflow.question.entity.Question;
import com.codestates.StackOverflow.user.User;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto) {
        if( questionPostDto == null) {
            return null;
        }

        Question question = new Question();

        User user = new User();
        user.setUserId(questionPostDto.getUserId());
        question.setUser(user);
        question.setTitle(questionPostDto.getTitle());
        question.setBody(questionPostDto.getBody());

        return question;
    }

    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);

    default QuestionDto.POSTResponse questionToQuestionPOSTResponseDto(Question question) {
        if(question == null) {
            return null;
        }

        QuestionDto.GETResponse getResponse = new QuestionDto.GETResponse();

        getResponse.setUser(userToQuestionUserResponseDto(question.getUser()));
    }
}
