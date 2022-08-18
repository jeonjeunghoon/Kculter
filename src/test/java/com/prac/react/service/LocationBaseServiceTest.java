package com.prac.react.service;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.prac.react.model.dto.LocationBase;

@SpringBootTest
public class LocationBaseServiceTest {

    Logger logger = LoggerFactory.getLogger(LocationBaseServiceTest.class);

    @Autowired
    LocationBaseService lbs;

    @Test
    void testGetNearStay() throws IOException {
        //given
        String lng = "126.981611";
        String lat = "37.568477";

        List<LocationBase> nearStayList = lbs.getNearStay(lat, lng);

        for(LocationBase lb : nearStayList){
            logger.info("LocationBase : "+lb.toString());
        }

    }

    @Test
    void testGetNearTour() throws IOException{
        //given
        String lng = "126.981611";
        String lat = "37.568477";

        List<LocationBase> nearTourList = lbs.getNearTour(lat, lng);

        for(LocationBase lb : nearTourList){
            logger.info("LocationBase : "+lb.toString());
        }       
    }
}
