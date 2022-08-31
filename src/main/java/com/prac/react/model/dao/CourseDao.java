package com.prac.react.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.Place;

@Mapper
public interface CourseDao {
    public Integer checkPlaceDb(Place place);
    public int saveNewPlace(Place place);
    public int insertCourse(Course course);
    public List<Course> getCourses(int memberNum);
    public int deleteCourse(int courseNum);
}
