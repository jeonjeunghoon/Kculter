package com.prac.react.model.dto;

public class Place {

    private int placeNum;
    private int placeType; //1 : kpop ,  2 : 문화 체험
    private int placeTypeKey; //장소 유형의 키값
    private long lat; //위도
    private long lng; //경도
    private int status; //1:삭제 ,2: 보존
    private String name;
    private String explain;
    private String address;
    private String fileUrl;

    public Place() {}

    public Place(int placeNum, int placeType, int placeTypeKey, long lat, long lng, int status, String name, String explain, String address, String fileUrl) {
        this.placeNum = placeNum;
        this.placeType = placeType;
        this.placeTypeKey = placeTypeKey;
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

    public int getPlaceTypeKey() {
        return this.placeTypeKey;
    }

    public void setPlaceTypeKey(int placeTypeKey) {
        this.placeTypeKey = placeTypeKey;
    }

    public long getLat() {
        return this.lat;
    }

    public void setLat(long lat) {
        this.lat = lat;
    }

    public long getLng() {
        return this.lng;
    }

    public void setLng(long lng) {
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
            ", placeTypeKey='" + getPlaceTypeKey() + "'" +
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
