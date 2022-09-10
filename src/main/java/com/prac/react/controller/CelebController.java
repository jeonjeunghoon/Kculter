package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.security.Encryption;
import com.prac.react.service.CelebService;

@CrossOrigin(origins = "http://kculter-lb-1250111111.ap-northeast-2.elb.amazonaws.com")
@RestController
public class CelebController {
    Logger logger = LoggerFactory.getLogger(CelebController.class);

    private CelebService cs;
    private Encryption encryption;

    @Autowired
    public CelebController(CelebService cs,Encryption encryption){
        this.encryption = encryption;
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

            Integer spot = cs.getSpot("/"+celeb.getKeyNum()+"/");
            
            if(spot == null){
                logger.warn("No spot with this celeb");
                celeb.setSpot(0);
            }else{
                celeb.setSpot(spot);
            }
            
            String hashKey = encryption.aesEncrypt(Integer.toString(celeb.getKeyNum()));
            celeb.setKeyHash(hashKey);
            celeb.setKeyNum(0);
        }
        
        if(celebList.isEmpty()){
            logger.error("No Celebrity Info");
        }
        return celebList;
    }
}
