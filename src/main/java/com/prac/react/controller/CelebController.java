package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.security.Encryption;
import com.prac.react.service.CelebService;

@RestController
public class CelebController {
    Logger logger = LoggerFactory.getLogger(CelebController.class);

    private CelebService cs;

    public CelebController(CelebService cs){
        this.cs = cs;
    }

    //Getting Celeb info
    @GetMapping("/celebrities")
    public List<Celebrity> getCelebrities(){
        List<Celebrity> celebList = new ArrayList<>();
        logger.info("Celeb list get API start");

        celebList = cs.getCelebrities();

        //받아온 키값을 암호화한다.
        for(Celebrity celeb : celebList){
            Encryption encrypt = new Encryption();
            String hashKey = encrypt.aesEncrypt(Integer.toString(celeb.getKeyNum()));
            celeb.setKeyHash(hashKey);
            celeb.setKeyNum(0);
        }

        return celebList;
    }
}
