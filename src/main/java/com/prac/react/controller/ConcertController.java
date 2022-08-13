package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Concert;
import com.prac.react.service.ConcertService;

@RestController
public class ConcertController {
    Logger logger = LoggerFactory.getLogger(ConcertController.class);

    private ConcertService cs;

    public ConcertController(ConcertService cs){
        this.cs = cs;
    }

    @GetMapping("/concerts")
    public List<Concert> getConcertList(){
        List<Concert> concertList = new ArrayList<>();
        logger.info("Getting ConcertList");
        concertList = cs.getConcertList();

        return concertList;
    }
    
}
