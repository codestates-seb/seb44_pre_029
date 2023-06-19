package com.codestates.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/v1/questions")
public class QuestionController {
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto){

        return new ResponseEntity<>(questionPostDto, HttpStatus.OK);
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") long question_id){

        return new ResponseEntity<Map>(HttpStatus.OK);
    }

    @DeleteMapping("/{email}")
    public ResponseEntity deleteUser(@PathVariable("email") String email){
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
