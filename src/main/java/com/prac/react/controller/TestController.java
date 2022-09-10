package com.prac.react.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:3000","http://43.201.18.118:3000","http://kculter.com:3000","https://kculter.com:3000"})
@RestController
public class TestController {

    @GetMapping("test")
    public String test(){
        return "test";
    }
}
