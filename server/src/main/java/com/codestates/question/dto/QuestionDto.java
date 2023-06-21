package com.codestates.question.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
    public static class  Post {
        private long userId;
        @NotBlank
        private String title;

        @NotBlank
        @Size(min = 20)
        private String body;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
    public static class Patch {
        private long questionId;
        @NotBlank
        private String title;
        @NotBlank
        @Size(min = 20)
        private String body;
        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
    public static class POSTResponse {
        private QuestionUserResponseDto user;
        private Response question;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
    public static class GETResponse {
        private QuestionUserResponseDto user;
        private Response question;
        private List<QuestionAnswerResponseDto> answer;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
    public static class GETAllResponse {
        private QuestionUserResponseDto user;
        private Response question;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
    public static class Response {
        private long questionId;
        private String title;
        private String body;
        @JsonProperty("is_answered")
        private boolean isAnswered;
        @JsonProperty("is_Selected")
        private boolean isSelected;
        private int viewCount;
        private int answerCount;
        private QuestionVoteResponseDto vote = new QuestionVoteResponseDto();
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}