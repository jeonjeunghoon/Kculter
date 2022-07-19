package com.prac.react.model.dto;

public class Member{
    private int memberNum;
    private String email;
    private String mb_name;
    private boolean checkMember;

    public Member(){}

    public Member(int memberNum, String email, String mb_name, boolean checkMember) {
        this.memberNum = memberNum;
        this.email = email;
        this.mb_name = mb_name;
        this.checkMember = checkMember;
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
    public String getMb_name() {
        return this.mb_name;
    }

    public void setMb_name(String mb_name) {
        this.mb_name = mb_name;
    }

    public boolean isCheckMember() {
        return this.checkMember;
    }

    public boolean getCheckMember() {
        return this.checkMember;
    }

    public void setCheckMember(boolean checkMember) {
        this.checkMember = checkMember;
    }

    @Override
    public String toString() {
        return "{" +
            " memberNum='" + getMemberNum() + "'" +
            ", email='" + getEmail() + "'" +
            ", mb_name='" + getMb_name() + "'" +
            ", checkMember='" + isCheckMember() + "'" +
            "}";
    }

}