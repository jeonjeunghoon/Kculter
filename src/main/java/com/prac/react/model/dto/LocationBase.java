package com.prac.react.model.dto;

public class LocationBase {
    private String addr1;
    private String addr2;
    private String contenttypeid;
    private String firstimage;
    private String firstimage2;
    private String mapx;
    private String mapy;
    private String tel;
    private String title;

    public LocationBase() {
    }

    public LocationBase(String addr1, String addr2, String contenttypeid, String firstimage, String firstimage2, String mapx, String mapy, String tel, String title) {
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.contenttypeid = contenttypeid;
        this.firstimage = firstimage;
        this.firstimage2 = firstimage2;
        this.mapx = mapx;
        this.mapy = mapy;
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

    public String getContenttypeid() {
        return this.contenttypeid;
    }

    public void setContenttypeid(String contenttypeid) {
        this.contenttypeid = contenttypeid;
    }

    public String getFirstimage() {
        return this.firstimage;
    }

    public void setFirstimage(String firstimage) {
        this.firstimage = firstimage;
    }

    public String getFirstimage2() {
        return this.firstimage2;
    }

    public void setFirstimage2(String firstimage2) {
        this.firstimage2 = firstimage2;
    }

    public String getMapx() {
        return this.mapx;
    }

    public void setMapx(String mapx) {
        this.mapx = mapx;
    }

    public String getMapy() {
        return this.mapy;
    }

    public void setMapy(String mapy) {
        this.mapy = mapy;
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
            ", contenttypeid='" + getContenttypeid() + "'" +
            ", firstimage='" + getFirstimage() + "'" +
            ", firstimage2='" + getFirstimage2() + "'" +
            ", mapx='" + getMapx() + "'" +
            ", mapy='" + getMapy() + "'" +
            ", tel='" + getTel() + "'" +
            ", title='" + getTitle() + "'" +
            "}";
    }

}
