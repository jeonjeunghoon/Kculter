package com.prac.react.model.dto;

import java.util.List;

public class CourseWrapper {
    private List<Place> course;
    private String courseName;
    private int memberNum;
    private String memeberHash;
    private int courseNum;
    private String courseHash;

    public CourseWrapper() {
    }

    public CourseWrapper(List<Place> course, String courseName, int memberNum, int courseNum) {
        this.course = course;
        this.courseName = courseName;
        this.memberNum = memberNum;
        this.courseNum = courseNum;
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

    public String getMemeberHash() {
        return this.memeberHash;
    }

    public void setMemeberHash(String memeberHash) {
        this.memeberHash = memeberHash;
    }

    public int getCourseNum() {
        return this.courseNum;
    }

    public void setCourseNum(int courseNum) {
        this.courseNum = courseNum;
    }

    public String getCourseHash() {
        return this.courseHash;
    }

    public void setCourseHash(String courseHash) {
        this.courseHash = courseHash;
    }


    @Override
    public String toString() {
        return "{" +
            " course='" + getCourse() + "'" +
            ", courseName='" + getCourseName() + "'" +
            ", memberNum='" + getMemberNum() + "'" +
            ", memeberHash='" + getMemeberHash() + "'" +
            ", courseNum='" + getCourseNum() + "'" +
            ", courseHash='" + getCourseHash() + "'" +
            "}";
    }


}
