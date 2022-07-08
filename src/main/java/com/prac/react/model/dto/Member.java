package main.java.com.prac.react.model.dto;

public class Member{
    private int memberNum;
    private String email;
    private String name;

    public void Member(){}

    public void Member(int memberNum, String email, String name){
        this.memberNum = memberNum;
        this.email = email;
        this.name = name;
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
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
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