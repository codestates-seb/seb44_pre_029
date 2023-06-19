package com.codestates.question;

public class QuestionPostDto {
    private long question_id;
    private long user_id;
    private long views;
    private String title;
    private String content;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public long getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(long question_id){
        this.question_id = question_id;
    }
    public long getUser_id() {
        return user_id;
    }

    public void setUser_id_id(long user_id){
        this.user_id = user_id;
    }

    public long getViews() {
        return views;
    }

    public void setViews(long views){
        this.views = views;
    }
}
