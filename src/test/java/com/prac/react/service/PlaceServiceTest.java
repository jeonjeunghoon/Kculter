package com.prac.react.service;


import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Place;

@SpringBootTest //DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional //테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션o
public class PlaceServiceTest {

    Logger logger = LoggerFactory.getLogger(ConcertServiceTest.class);

    @Autowired
    PlaceService ps;

    @Test
    void testGetPlaceList() {
        //given
        List<Place> places = new ArrayList<>();

        //when
        places = ps.getPlaceList();

        //then
        if(places.isEmpty()){
            logger.warn("Place list is Empty!!");
        }else{
            for(Place place : places){
                logger.info("Place : "+place.toString());
            }            
        }
    }
}
