package com.prac.react.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"https://kculter.com","http://localhost:3000"})
@RestController
public class TestController {

    @GetMapping("test")
    public String test(){
        return "test";
    }
}
