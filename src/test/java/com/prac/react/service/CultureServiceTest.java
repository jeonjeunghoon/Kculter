package com.prac.react.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Culture;

@SpringBootTest //DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional //테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class CultureServiceTest {

    Logger logger = LoggerFactory.getLogger(CultureServiceTest.class);

    @Autowired
    CultureService cs;

    @Test
    void testGetCultureList() {
        //given
        List<Culture> cultureList = new ArrayList<>();

        //when
        cultureList = cs.getCultureList();

        //then
        if(cultureList.isEmpty()){
            logger.warn("Culture list is Empty!!");
        }else{
            for(Culture culture : cultureList){
                logger.info("Culture : "+ culture.toString());
            }            
        }
    }
    @Test
    void testGetSpot(){
        //given
        String key = "/2/";
        //when
        Integer count = cs.getSpot(key);
        logger.info("Count : "+count);
        //then
        assertNotNull(count);
    }
}
