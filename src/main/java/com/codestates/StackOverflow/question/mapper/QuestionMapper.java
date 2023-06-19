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
        user.setUser_id(questionPostDto.getUserId());
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

        QuestionDto.POSTResponse postResponse = new QuestionDto.POSTResponse();

        postResponse.setUser(userToQuestionUserResponseDto(question.getUser()));
        postResponse.setQuestion(questionToQuestionResponseDto(question));
        return postResponse;
    }

    default QuestionDto.GETResponse questionToQuestionGETResponseDto(Question question) {
        if(question == null) {
            return null;
        }

        QuestionDto.GETResponse getResponse = new QuestionDto.GETResponse();

        getResponse.setUser(userToQuestionUserResponseDto(question.getUser()));
        getResponse.setQuestion(questionToQuestionResponseDto(question));
        getResponse.setAnswer(answerListToQuestionAnswerResponseDtoList(question.getAnswers()));

        return getResponse;
    }

    default QuestionDto.GETAllResponse questionToGetAllResponse(Question question) {
        if(question == null) {
            return null;
        }

        QuestionDto.GETAllResponse getAllResponse = new QuestionDto.GETAllResponse();

        getAllResponse.setUser(userToQuestionUserResponseDto(question.getUser()));
        getAllResponse.setQuestion(questionToQuestionResponseDto(question));
        return getAllResponse;
    }

    List<QuestionDto.GETAllResponse> questionToQuestionGetAllResponse(List<Question> questions);

    default QuestionDto.Response questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }

        QuestionDto.Response response = new QuestionDto.Response();

        response.setQuestionId(question.getQuestionId());
        response.setTitle(question.getTitle());
        response.setBody(question.getBody());
        response.setAnswered(question.isAnswered());
        response.setSelected(question.isSelected());
        response.setViewCount(question.getViewCount());
        response.setAnswerCount(question.getAnswerCount());
        response.setCreatedAt(question.getCreateAt());
        response.setModifiedAt(question.getModifiedAt());
        return response;
    }

    default QuestionUserResponseDto userToQuestionUserResponseDto(User user) {
        if(user == null) {
            return null;
        }

        QuestionUserResponseDto questionUserResponseDto = new QuestionUserResponseDto();
        questionUserResponseDto.setUserId(user.getUser_id());
        questionUserResponseDto.setDisplayName(user.getNickname());
        // questionUserResponseDto.setImageUrl(user.getImageUrl());
        return questionUserResponseDto;
    }

    List<QuestionAnswerResponseDto> answerListToQuestionAnswerResponseDtoList(List<Answer> answers);

    default QuestionAnswerResponseDto answerToQuestionAnswerResponseDto(Answer answer) {
        if(answer == null) {
            return null;
        }

        QuestionAnswerResponseDto questionAnswerResponseDto = new QuestionAnswerResponseDto();
        questionAnswerResponseDto.setUser(userToQuestionUserResponseDto(answer.getUser()));
        questionAnswerResponseDto.setAnswerId(answer.getAnswerId());
        questionAnswerResponseDto.setBody(answer.getBody());
        questionAnswerResponseDto.setCreatedAt(answer.getCreatedAt());
        questionAnswerResponseDto.setModifiedAt(answer.getModifiedAt());

        return questionAnswerResponseDto;
    }
}
