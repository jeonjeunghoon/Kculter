package com.prac.react.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://kculter-lb-1250111111.ap-northeast-2.elb.amazonaws.com")
@RestController
public class TestController {

    @GetMapping("test")
    public String test(){
        return "test";
    }
}
