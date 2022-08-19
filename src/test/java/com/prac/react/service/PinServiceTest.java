package com.prac.react.service;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Pin;

@SpringBootTest
@Transactional
public class PinServiceTest {

    Logger logger = LoggerFactory.getLogger(PinServiceTest.class);

    @Autowired
    PinService ps;

    @Test
    void testGetKpopPin() {
        //given
        int key = 1;
        Pin pin = new Pin();
        //when
        pin = ps.getKpopPin(key);
        //then
        if(pin == null){
            logger.info("Pin is null");
        }else{
            logger.info("Pin info : "+pin.toString());    
        }
    }

    @Test
    void testGetCulturePin(){
        //given
        int key = 1;
        Pin pin = new Pin();
        //when
        pin = ps.getCulturePin(key);
        //then
        if(pin == null){
            logger.info("Pin is null");
        }else{
            logger.info("Pin info : "+pin.toString());    
        }
              
    }
}
