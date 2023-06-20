package com.codestates.dto;

import com.codestates.question.dto.QuestionDto;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class MultiResponseDto {
    private PageInfo pageInfo;

    public MultiResponseDto(List<QuestionDto.GETAllResponse> questionResponseDtos, Page page) {
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());

    }
}
