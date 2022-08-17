package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.service.CelebService;

@RestController
public class CelebController {
    Logger logger = LoggerFactory.getLogger(CelebController.class);

    private CelebService cs;

    public CelebController(CelebService cs){
        this.cs = cs;
    }

    @GetMapping("/celebrities")
    public List<Celebrity> getCelebrities(){
        List<Celebrity> celebList = new ArrayList<>();
        logger.info("Celeb list get API start");

        celebList = cs.getCelebrities();

        return celebList;
    }
}
