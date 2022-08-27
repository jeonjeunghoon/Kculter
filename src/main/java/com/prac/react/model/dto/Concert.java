package com.prac.react.model.dto;

import java.util.Date;

public class Concert {
    
    private int concertNum; //콘서트 번호
    private String concertHash;
    private String concertName; // 콘서트 이름
    private String explain; // 콘서트 설명
    private Date startDate; // 콘서트 시작일자
    private Date endDate; // 콘서트 끝나는 일자
    private double lat; // 위도
    private double lng; // 경도
    private int starKey; // kpop 키번호
    private String starHash;
    private String imageUrl; // 이미지 파일 url
    private int status; // 상태 1: 저장 2: 삭제
    private String starName; //연예인 이름

    public Concert() {
    }

    public Concert(int concertNum, String concertName, String explain, Date startDate, Date endDate, double lat, double lng, int starKey, String imageUrl, int status, String starName) {
        this.concertNum = concertNum;
        this.concertName = concertName;
        this.explain = explain;
        this.startDate = startDate;
        this.endDate = endDate;
        this.lat = lat;
        this.lng = lng;
        this.starKey = starKey;
        this.imageUrl = imageUrl;
        this.status = status;
        this.starName = starName;
    }



    public int getConcertNum() {
        return this.concertNum;
    }

    public void setConcertNum(int concertNum) {
        this.concertNum = concertNum;
    }

    public String getConcertHash() {
        return this.concertHash;
    }

    public void setConcertHash(String concertHash) {
        this.concertHash = concertHash;
    }

    public String getConcertName() {
        return this.concertName;
    }

    public void setConcertName(String concertName) {
        this.concertName = concertName;
    }

    public String getExplain() {
        return this.explain;
    }

    public void setExplain(String explain) {
        this.explain = explain;
    }

    public Date getStartDate() {
        return this.startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return this.endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
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

    public int getStarKey() {
        return this.starKey;
    }

    public void setStarKey(int starKey) {
        this.starKey = starKey;
    }

    public String getStarHash() {
        return this.starHash;
    }

    public void setStarHash(String starHash) {
        this.starHash = starHash;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getStarName() {
        return this.starName;
    }

    public void setStarName(String starName) {
        this.starName = starName;
    }



    @Override
    public String toString() {
        return "{" +
            " concertNum='" + getConcertNum() + "'" +
            ", concertHash='" + getConcertHash() + "'" +
            ", concertName='" + getConcertName() + "'" +
            ", explain='" + getExplain() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", endDate='" + getEndDate() + "'" +
            ", lat='" + getLat() + "'" +
            ", lng='" + getLng() + "'" +
            ", starKey='" + getStarKey() + "'" +
            ", starHash='" + getStarHash() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            ", status='" + getStatus() + "'" +
            ", starName='" + getStarName() + "'" +
            "}";
    }

    
}
