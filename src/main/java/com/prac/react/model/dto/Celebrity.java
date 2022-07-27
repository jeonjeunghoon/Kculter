package com.prac.react.model.dto;

public class Celebrity {
    private int celebNum;
    private String name;
    private int likeCount;
    private int status;
    private String explain;
    private String fileName;

    public Celebrity() {
    }

    public Celebrity(int celebNum, String name, int likeCount, int status, String explain, String fileName) {
        this.celebNum = celebNum;
        this.name = name;
        this.likeCount = likeCount;
        this.status = status;
        this.explain = explain;
        this.fileName = fileName;
    }

    public int getCelebNum() {
        return this.celebNum;
    }

    public void setCelebNum(int celebNum) {
        this.celebNum = celebNum;
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

    public String getFileName() {
        return this.fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public String toString() {
        return "{" +
            " celebNum='" + getCelebNum() + "'" +
            ", name='" + getName() + "'" +
            ", likeCount='" + getLikeCount() + "'" +
            ", status='" + getStatus() + "'" +
            ", explain='" + getExplain() + "'" +
            ", fileName='" + getFileName() + "'" +
            "}";
    }
}
