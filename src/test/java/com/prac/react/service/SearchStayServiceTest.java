package com.prac.react.service;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.prac.react.model.dto.Stay;


@SpringBootTest
public class SearchStayServiceTest {

    Logger logger = LoggerFactory.getLogger(SearchStayServiceTest.class);

    @Autowired
    SearchStayService sss;

    @Test
    void testGetNearStay() throws IOException{
        //when
        List<Stay> list = sss.getAllStay();

        //then
        for(Stay stay : list){
            logger.info(stay.toString());
        }
    }
}
