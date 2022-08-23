package com.prac.react.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.model.dao.CourseDao;
import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.Place;

@Service
public class CourseService {
    Logger logger = LoggerFactory.getLogger(CourseService.class);

    private CourseDao cd;

    public CourseService(CourseDao cd){
        this.cd = cd;
    }

    public Integer checkPlaceDb(Place place){
        return cd.checkPlaceDb(place);
    }

    public int saveNewPlace(Place place){
        return cd.saveNewPlace(place);
    }

    public int insertCourse(Course course){
        return cd.insertCourse(course);
    }
}
