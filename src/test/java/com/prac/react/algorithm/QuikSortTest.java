package com.prac.react.algorithm;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

import com.prac.react.model.dto.CourseWrapper;

public class QuikSortTest {

    Logger logger = LoggerFactory.getLogger(QuikSortTest.class);

    @Test
    public void quikSortTest(){
        //given
        List<CourseWrapper> cwl = new ArrayList<>();
        CourseWrapper cw1 = new CourseWrapper();
        CourseWrapper cw2 = new CourseWrapper();
        CourseWrapper cw3 = new CourseWrapper();
        CourseWrapper cw4 = new CourseWrapper();
        CourseWrapper cw5 = new CourseWrapper();
        CourseWrapper cw6 = new CourseWrapper();
        cw1.setCourseNum(0);
        cw2.setCourseNum(4);
        cw3.setCourseNum(3);
        cw4.setCourseNum(5);
        cw5.setCourseNum(1);
        cw6.setCourseNum(2);
        cwl.add(cw1);
        cwl.add(cw2);
        cwl.add(cw3);
        cwl.add(cw4);
        cwl.add(cw5);
        cwl.add(cw6);
        logger.info("------Before sort------");
        for(CourseWrapper cw : cwl){
            logger.info(cw.toString());
        }

        QuikSort qs = new QuikSort();

        qs.quikSort(cwl);
        
        logger.info("------After sort------");
        for(CourseWrapper cw : cwl){
            logger.info(cw.toString());
        }
    }
}
