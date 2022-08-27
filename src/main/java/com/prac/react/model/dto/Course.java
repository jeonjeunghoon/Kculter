package com.prac.react.model.dto;

public class Course {
    private int courseNum;
    private String courseHash;
    private String courseName;
    private String places;
    private int memberNum;
    private String memberHash;

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

    public String getCourseHash() {
        return this.courseHash;
    }

    public void setCourseHash(String courseHash) {
        this.courseHash = courseHash;
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

    public String getMemberHash() {
        return this.memberHash;
    }

    public void setMemberHash(String memberHash) {
        this.memberHash = memberHash;
    }

    @Override
    public String toString() {
        return "{" +
            " courseNum='" + getCourseNum() + "'" +
            ", courseHash='" + getCourseHash() + "'" +
            ", courseName='" + getCourseName() + "'" +
            ", places='" + getPlaces() + "'" +
            ", memberNum='" + getMemberNum() + "'" +
            ", memberHash='" + getMemberHash() + "'" +
            "}";
    }

}  
