package com.codestates.response;

import com.codestates.question.dto.QuestionDto;
import lombok.Getter;

import java.util.List;

@Getter
public class QuestionPageResponseDto {
    private List<QuestionDto.GETResponse> data;
    private PageInfo pageInfo;

    public QuestionPageResponseDto(List<QuestionDto.GETResponse> data, PageInfo pageInfo){
        this.data = data;
        this.pageInfo = pageInfo;
    }
}

