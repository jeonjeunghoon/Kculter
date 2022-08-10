package com.prac.react.model.dto;

import java.util.Date;

public class Concert {
    
    private int concertNum;
    private String address;
    private Date startDate;
    private String celebName;
    private int status;
    private Date endDate;
    private String explain;
    private String imageUrl;

    public Concert() {
    }

    public Concert(int concertNum, String address, Date startDate, String celebName, int status, Date endDate, String explain, String imageUrl) {
        this.concertNum = concertNum;
        this.address = address;
        this.startDate = startDate;
        this.celebName = celebName;
        this.status = status;
        this.endDate = endDate;
        this.explain = explain;
        this.imageUrl = imageUrl;
    }

    public int getConcertNum() {
        return this.concertNum;
    }

    public void setConcertNum(int concertNum) {
        this.concertNum = concertNum;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getStartDate() {
        return this.startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getCelebName() {
        return this.celebName;
    }

    public void setCelebName(String celebName) {
        this.celebName = celebName;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getEndDate() {
        return this.endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getExplain() {
        return this.explain;
    }

    public void setExplain(String explain) {
        this.explain = explain;
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
            " concertNum='" + getConcertNum() + "'" +
            ", address='" + getAddress() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", celebName='" + getCelebName() + "'" +
            ", status='" + getStatus() + "'" +
            ", endDate='" + getEndDate() + "'" +
            ", explain='" + getExplain() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            "}";
    }


    
}
