package com.prac.react.model.dto;

public class Course {
    private int courseNum;
    private String courseName;
    private String places;
    private int memberNum;

    public Course() {}

    public Course(int courseNum, String courseName, String places, int memberNum) {
        this.courseNum = courseNum;
        this.courseName = courseName;
        this.places = places;
        this.memberNum = memberNum;
    }

    public int getCourseNum() {
        return this.courseNum;
    }

    public void setCourseNum(int courseNum) {
        this.courseNum = courseNum;
    }

    public String getCourseName() {
        return this.courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getPlaces() {
        return this.places;
    }

    public void setPlaces(String places) {
        this.places = places;
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
            " courseNum='" + getCourseNum() + "'" +
            ", courseName='" + getCourseName() + "'" +
            ", places='" + getPlaces() + "'" +
            ", memberNum='" + getMemberNum() + "'" +
            "}";
    }
}  
