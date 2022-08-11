package com.prac.react.model.dto;

public class Place {

    private int placeNum;
    private int placeType; //1 : kpop ,  2 : 문화 체험
    private String culture;
    private String kpop;
    private double lat; //위도
    private double lng; //경도
    private int status; //1:삭제 ,2: 보존
    private String name;
    private String explain;
    private String address;
    private String fileUrl;

    public Place() {
    }

    public Place(int placeNum, int placeType, String culture, String kpop, double lat, double lng, int status, String name, String explain, String address, String fileUrl) {
        this.placeNum = placeNum;
        this.placeType = placeType;
        this.culture = culture;
        this.kpop = kpop;
        this.lat = lat;
        this.lng = lng;
        this.status = status;
        this.name = name;
        this.explain = explain;
        this.address = address;
        this.fileUrl = fileUrl;
    }

    public int getPlaceNum() {
        return this.placeNum;
    }

    public void setPlaceNum(int placeNum) {
        this.placeNum = placeNum;
    }

    public int getPlaceType() {
        return this.placeType;
    }

    public void setPlaceType(int placeType) {
        this.placeType = placeType;
    }

    public String getCulture() {
        return this.culture;
    }

    public void setCulture(String culture) {
        this.culture = culture;
    }

    public String getKpop() {
        return this.kpop;
    }

    public void setKpop(String kpop) {
        this.kpop = kpop;
    }

    public double getLat() {
        return this.lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return this.lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExplain() {
        return this.explain;
    }

    public void setExplain(String explain) {
        this.explain = explain;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFileUrl() {
        return this.fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    @Override
    public String toString() {
        return "{" +
            " placeNum='" + getPlaceNum() + "'" +
            ", placeType='" + getPlaceType() + "'" +
            ", culture='" + getCulture() + "'" +
            ", kpop='" + getKpop() + "'" +
            ", lat='" + getLat() + "'" +
            ", lng='" + getLng() + "'" +
            ", status='" + getStatus() + "'" +
            ", name='" + getName() + "'" +
            ", explain='" + getExplain() + "'" +
            ", address='" + getAddress() + "'" +
            ", fileUrl='" + getFileUrl() + "'" +
            "}";
    }

 
}
