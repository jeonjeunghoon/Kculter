package com.prac.react.model.dto;

import java.util.List;

public class CourseWrapper {
    private List<Place> course;
    private String courseName;
    private int memberNum;

    public CourseWrapper() {
    }

    public CourseWrapper(List<Place> course, String courseName, int memberNum) {
        this.course = course;
        this.courseName = courseName;
        this.memberNum = memberNum;
    }

    public List<Place> getCourse() {
        return this.course;
    }

    public void setCourse(List<Place> course) {
        this.course = course;
    }

    public String getCourseName() {
        return this.courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getMemberNum() {
        return this.memberNum;
    }

    public void setMemberNum(int memberNum) {
        this.memberNum = memberNum;
    }

    @Override
    public String toString() {
        return "{" +
            " course='" + getCourse() + "'" +
            ", courseName='" + getCourseName() + "'" +
            ", memberNum='" + getMemberNum() + "'" +
            "}";
    }


}
