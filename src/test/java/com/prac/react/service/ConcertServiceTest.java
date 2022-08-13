package com.prac.react.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Concert;

@SpringBootTest //DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional //테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class ConcertServiceTest {

    Logger logger = LoggerFactory.getLogger(ConcertServiceTest.class);

    @Autowired
    ConcertService cs;

    @Test
    void testGetConcertNumbyCelebName() {
        //given
        String celebName = "BTS";
        //when
        Integer result = cs.getConcertNumbyCelebName(celebName);
        //then
        logger.info("result : "+ result);
    }

    @Test
    void testUpdateCelebNum() {
        //given
        int celebNum = 1;
        int concertNum = 1;
        //when
        Integer result = cs.updateCelebNum(celebNum, concertNum);
        //then
        logger.info("result : "+result);
    }

    @Test
    void testGetConcertList() {
        //given
        List<Concert> concertList = new ArrayList<>();

        //when
        concertList = cs.getConcertList();

        //then
        if(concertList.isEmpty()){
            logger.warn("Concert list is Empty!!");
        }else{
            for(Concert concert : concertList){
                logger.info("Concert : "+concert.toString());
            }            
        }
    }
}
