package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Concert;
import com.prac.react.security.Encryption;
import com.prac.react.service.ConcertService;

@RestController
public class ConcertController {
    Logger logger = LoggerFactory.getLogger(ConcertController.class);

    private ConcertService cs;
    private Encryption encryption;

    @Autowired
    public ConcertController(ConcertService cs,Encryption encryption){
        this.cs = cs;
        this.encryption = encryption;
    }

    //Getting Concert info
    @CrossOrigin(origins = "http://localhost:3000, http://43.201.18.118:3000, http://kculter.com:3000")
    @GetMapping("/concerts")
    public List<Concert> getConcertList(){
        List<Concert> concertList = new ArrayList<>();
        logger.info("Getting ConcertList");
        concertList = cs.getConcertList();

        if(concertList.isEmpty()){
            logger.error("No concert info in DB");
        }

        for(Concert concert : concertList){
            int concertKey = concert.getConcertNum();
            int starKey = concert.getStarKey();
            String concertKeyHash = encryption.aesEncrypt(Integer.toString(concertKey));
            String starKeyHash = encryption.aesEncrypt(Integer.toString(starKey));
            concert.setConcertHash(concertKeyHash);
            concert.setConcertNum(0);
            concert.setStarHash(starKeyHash);
            concert.setStarKey(0);
        }

        return concertList;
    }
    
}
