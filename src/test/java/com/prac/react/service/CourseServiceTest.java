package com.prac.react.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dao.PlaceDao;
import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.CourseWrapper;
import com.prac.react.model.dto.Place;

@SpringBootTest
@Transactional 
public class CourseServiceTest {

    @Autowired
    CourseService cs;
    @Autowired
    PlaceDao pd;

    Logger logger = LoggerFactory.getLogger(CourseServiceTest.class);

    @Test
    void testInsertCourse() {
        //given
        Course course = new Course(0,"가즈아","1/2/3/",1);
        //when
        int result = cs.insertCourse(course);
        //then
        logger.info("Result : "+result);
    }

    @Test
    void testSaveNewPlace() {

        //given
        Place place = new Place(0, 0, "" , "", 123, 37, 0,
         "연세대", "", "", "테스트");
        //when
        
        cs.saveNewPlace(place);

        //them
        logger.info("Result : "+ place.getPlaceNum());

    }

    @Test 
    void testCheckPlaceDb() {
        //given
        Place place = new Place(0, 0, "" , "", 123, 37, 0,
        "연세대", "", "", "테스트");
        //when
        Integer placeNum = cs.checkPlaceDb(place);
        //then
        logger.info("PlaceNum : "+ placeNum);
    }
    @Test
    void testGetCourses() {
        //given
        int memberNum = 1;
        //when
        List<Course> courses = cs.getCourses(memberNum);
        //then
        if(courses.isEmpty()){
            logger.warn("There is no course info with this memberNum");
        }else{
            for(Course course : courses){
                logger.info("Course : "+course.toString());
            }
        }
    }
    
    @Test
    void testGetMemberCourseWrapper() throws InterruptedException{
        //given
        int memberNum = 1;
        List<Course> courses = cs.getCourses(memberNum);
        List<CourseWrapper> cwl = new ArrayList<>();
        //when
        cwl = cs.getMemberCourseWrapper(memberNum, courses);

        //then
        assert(!courses.isEmpty()&&!cwl.isEmpty());
    }
}
