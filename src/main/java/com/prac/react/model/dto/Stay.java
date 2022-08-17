package com.prac.react.model.dto;

public class Stay {

    private String addr1; //주소
    private String addr2; //상세주소
    private String areaCode; //지역코드
    private String sigunguCode; //시군구코드
    private String representImg; //대표이미지 url
    private String sumnail; //썸네일 이미지 url
    private double lng; //경도
    private double lat; //위도
    private String tel; //전화번호
    private String title; //제목

    public Stay() {
    }

    public Stay(String addr1, String addr2, String areaCode, String sigunguCode, String representImg, String sumnail, double lng, double lat, String tel, String title) {
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.areaCode = areaCode;
        this.sigunguCode = sigunguCode;
        this.representImg = representImg;
        this.sumnail = sumnail;
        this.lng = lng;
        this.lat = lat;
        this.tel = tel;
        this.title = title;
    }

    public String getAddr1() {
        return this.addr1;
    }

    public void setAddr1(String addr1) {
        this.addr1 = addr1;
    }

    public String getAddr2() {
        return this.addr2;
    }

    public void setAddr2(String addr2) {
        this.addr2 = addr2;
    }

    public String getAreaCode() {
        return this.areaCode;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode;
    }

    public String getSigunguCode() {
        return this.sigunguCode;
    }

    public void setSigunguCode(String sigunguCode) {
        this.sigunguCode = sigunguCode;
    }

    public String getRepresentImg() {
        return this.representImg;
    }

    public void setRepresentImg(String representImg) {
        this.representImg = representImg;
    }

    public String getSumnail() {
        return this.sumnail;
    }

    public void setSumnail(String sumnail) {
        this.sumnail = sumnail;
    }

    public double getLng() {
        return this.lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public double getLat() {
        return this.lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public String getTel() {
        return this.tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    @Override
    public String toString() {
        return "{" +
            " addr1='" + getAddr1() + "'" +
            ", addr2='" + getAddr2() + "'" +
            ", areaCode='" + getAreaCode() + "'" +
            ", sigunguCode='" + getSigunguCode() + "'" +
            ", representImg='" + getRepresentImg() + "'" +
            ", sumnail='" + getSumnail() + "'" +
            ", lng='" + getLng() + "'" +
            ", lat='" + getLat() + "'" +
            ", tel='" + getTel() + "'" +
            ", title='" + getTitle() + "'" +
            "}";
    }
}
