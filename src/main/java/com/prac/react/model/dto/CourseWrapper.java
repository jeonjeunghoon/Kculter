package com.prac.react.model.dto;

import java.util.List;

public class CourseWrapper {
    private List<Place> course;

    public CourseWrapper() {
    }

    public CourseWrapper(List<Place> course) {
        this.course = course;
    }

    public List<Place> getCourse() {
        return this.course;
    }

    public void setCourse(List<Place> course) {
        this.course = course;
    }
}
