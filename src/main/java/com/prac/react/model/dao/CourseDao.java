package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.Place;

@Mapper
public interface CourseDao {
    public Integer checkPlaceDb(Place place);
    public int saveNewPlace(Place place);
    public int insertCourse(Course course);
}
