package com.prac.react.model.dto;

public class Pin {
    private int pinNum;
    private int pinType;
    private int pinKeyNum;
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
            ", pinType='" + getPinType() + "'" +
            ", pinKeyNum='" + getPinKeyNum() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            "}";
    }


}
