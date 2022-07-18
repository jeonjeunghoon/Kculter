package com.prac.react.model.dto;

public class Member{
    private int memberNum;
    private String email;
    private String mb_name;

    public Member(){}

    public Member(int memberNum, String email, String mb_name){
        this.memberNum = memberNum;
        this.email = email;
        this.mb_name = mb_name;
    }
    public int getMemberNum() {
        return this.memberNum;
    }

    public void setMemberNum(int memberNum) {
        this.memberNum = memberNum;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return this.mb_name;
    }

    public void setName(String mb_name) {
        this.mb_name = mb_name;
    }

    @Override
    public String toString() {
        return "{" +
            " memberNum='" + getMemberNum() + "'" +
            ", email='" + getEmail() + "'" +
            ", name='" + getName() + "'" +
            "}";
    }
}