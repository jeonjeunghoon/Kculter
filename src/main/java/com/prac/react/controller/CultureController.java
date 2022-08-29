package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Culture;
import com.prac.react.security.Encryption;
import com.prac.react.service.CultureService;

@RestController
public class CultureController {
    Logger logger = LoggerFactory.getLogger(CultureController.class);

    private CultureService cs;

    public CultureController(CultureService cs){
        this.cs = cs;
    }


    @GetMapping("/culture")
    public List<Culture> getCultures(){
        List<Culture> cultureList = new ArrayList<>();
        logger.info("Culture list get API start");

        cultureList = cs.getCultureList();

        Encryption encrypt = new Encryption();

        for(Culture culture : cultureList){
            String keyHash = encrypt.aesEncrypt(Integer.toString(culture.getKeyNum()));
            culture.setKeyHash(keyHash);
            culture.setKeyNum(0);
        }
        
        return cultureList;
    }
}
