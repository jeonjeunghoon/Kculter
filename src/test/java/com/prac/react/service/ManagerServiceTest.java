package com.prac.react.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Concert;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Pin;
import com.prac.react.model.dto.Place;

@SpringBootTest //DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional //테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class ManagerServiceTest {

    @Autowired
    ManagerService ms;

    Logger logger = LoggerFactory.getLogger(ManagerServiceTest.class);

    @Test
    void testInsertCulture() {
        //given
        Culture culture = new Culture(0, "테스트", 0, 1, "테스트입니다.", "테스트입니다.");

        //when
        int result = ms.insertCulture(culture);

        //then
        logger.info("result : "+ result);
        assertEquals(result, 1);
    }
    @Test
    void testInsertKpop() {
        //given
        Celebrity celeb = new Celebrity(0, "테스트", 0, 1, "테스트입니다.", "테스트입니다.");

        //when
        int result = ms.insertKpop(celeb);

        //then
        logger.info("result : "+ result);
        assertEquals(result, 1);
    }

    @Test
    void testInsertPlace(){
        //given
        Place place = new Place(0, 0, "1", "0", 123, 37, 0, 
        "test", "test", "test", "test");
        
        //when
        int result = ms.insertPlace(place);
        
        //then
        logger.info("result : "+ result);
        assertEquals(result,1);
    }

    @Test
    void testInsertConcert(){
        //given
        Concert concert = new Concert(0, "", "test", "test", new Date(), new Date(), 0, 0, 0, "test", "test", 0, "test", "test");

         //when
         int result = ms.insertConcert(concert);

         //then
         logger.info("result : "+ result);
         assertEquals(result,1);
    }

    @Test
    void testUpdatePlace(){
        //given
        Place place = new Place(1, 1, "", "1", 123, 37,
         0, "test", "test", "test","test");

         //when
         int result = ms.updatePlace(place);
         
         //then
         logger.info("result : "+ result);
    }

    @Test
    void testCheckDuplicate(){
        //given
        Place place = new Place(1, 2, "1", "1", 123, 37,
         0, "test", "test", "test","test");

         //when
         int result = ms.checkDuplicate(place);

         //then
         logger.info("result : "+result);
    }
    @Test
    void testInsertPin(){
        //given
        Pin pin = new Pin(0, 1, 1,"테스트");

        //when
        int result = ms.insertPin(pin);

        //then
        logger.info("result : "+result);
    }
}
