package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Culture;
import com.prac.react.security.Encryption;
import com.prac.react.service.CultureService;

@CrossOrigin(origins = "https://kculter.com")
@RestController
public class CultureController {
    Logger logger = LoggerFactory.getLogger(CultureController.class);

    private CultureService cs;
    private Encryption encryption;

    @Autowired
    public CultureController(CultureService cs,Encryption encryption){
        this.encryption = encryption;
        this.cs = cs;
    }

    @GetMapping("/cultures")
    public List<Culture> getCultures(){
        List<Culture> cultureList = new ArrayList<>();
        logger.info("Culture list get API start");

        cultureList = cs.getCultureList();

        if(cultureList.isEmpty()){
            logger.error("No culture list in DB");
        }
        
        for(Culture culture : cultureList){

            Integer spot = cs.getSpot("/"+culture.getKeyNum()+"/");

            if(spot == null){
                logger.warn("No spot with this culture");
                culture.setSpot(0);
            }else{
                culture.setSpot(spot);
            }
            
            String keyHash = encryption.aesEncrypt(Integer.toString(culture.getKeyNum()));
            culture.setKeyHash(keyHash);
            culture.setKeyNum(0);
        }
        
        return cultureList;
    }
}
