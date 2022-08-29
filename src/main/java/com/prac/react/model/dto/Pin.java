package com.prac.react.model.dto;

public class Pin {
    private int pinNum; //핀번호
    private String pinHash; //핀번호 암호화
    private int pinType;
    private int pinKeyNum; //핀 유형 키값
    private String pinKeyHash;//핀 유형 키값 암호화
    private String imageUrl;

    public Pin() {
    }

    public Pin(int pinNum, int pinType, int pinKeyNum, String imageUrl) {
        this.pinNum = pinNum;
        this.pinType = pinType;
        this.pinKeyNum = pinKeyNum;
        this.imageUrl = imageUrl;
    }


    public int getPinNum() {
        return this.pinNum;
    }

    public void setPinNum(int pinNum) {
        this.pinNum = pinNum;
    }

    public String getPinHash() {
        return this.pinHash;
    }

    public void setPinHash(String pinHash) {
        this.pinHash = pinHash;
    }

    public int getPinType() {
        return this.pinType;
    }

    public void setPinType(int pinType) {
        this.pinType = pinType;
    }

    public int getPinKeyNum() {
        return this.pinKeyNum;
    }

    public void setPinKeyNum(int pinKeyNum) {
        this.pinKeyNum = pinKeyNum;
    }

    public String getPinKeyHash() {
        return this.pinKeyHash;
    }

    public void setPinKeyHash(String pinKeyHash) {
        this.pinKeyHash = pinKeyHash;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }


    @Override
    public String toString() {
        return "{" +
            " pinNum='" + getPinNum() + "'" +
            ", pinHash='" + getPinHash() + "'" +
            ", pinType='" + getPinType() + "'" +
            ", pinKeyNum='" + getPinKeyNum() + "'" +
            ", pinKeyHash='" + getPinKeyHash() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            "}";
    }


}
