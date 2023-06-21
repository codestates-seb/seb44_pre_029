package com.codestates.Exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User email not found"),
    USER_EXISTS(409, "User email exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    QUESTION_EXISTS(409, "Question title exists"),
    CANNOT_CHANGE_QUESTION(403, "Question can not change"),
    CANNOT_CHANGE_USER(403, "User can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation");



    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }


}
