package com.prac.react.model.dto;

public class Culture {
    private int cultNum;
    private String name;
    private int likeCount;
    private int status;
    private String explain;
    private String fileUrl;
    
    public Culture() {
    }

    public Culture(int cultNum, String name, int likeCount, int status, String explain, String fileUrl) {
        this.cultNum = cultNum;
        this.name = name;
        this.likeCount = likeCount;
        this.status = status;
        this.explain = explain;
        this.fileUrl = fileUrl;
    }

    public int getCultNum() {
        return this.cultNum;
    }

    public void setCultNum(int cultNum) {
        this.cultNum = cultNum;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLikeCount() {
        return this.likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getExplain() {
        return this.explain;
    }

    public void setExplain(String explain) {
        this.explain = explain;
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
            " cultNum='" + getCultNum() + "'" +
            ", name='" + getName() + "'" +
            ", likeCount='" + getLikeCount() + "'" +
            ", status='" + getStatus() + "'" +
            ", explain='" + getExplain() + "'" +
            ", fileUrl='" + getFileUrl() + "'" +
            "}";
    }
}
