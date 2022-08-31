package com.prac.react.model.dto;

public class FrontMember {
    private String memberHash;
    private String memberName;
    private String pf_image;
    private String mgHash;

    public FrontMember() {
    }


    public FrontMember(String memberHash, String memberName, String pf_image, String mgHash) {
        this.memberHash = memberHash;
        this.memberName = memberName;
        this.pf_image = pf_image;
        this.mgHash = mgHash;
    }

    public String getMemberHash() {
        return this.memberHash;
    }

    public void setMemberHash(String memberHash) {
        this.memberHash = memberHash;
    }

    public String getMemberName() {
        return this.memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getPf_image() {
        return this.pf_image;
    }

    public void setPf_image(String pf_image) {
        this.pf_image = pf_image;
    }

    public String getMgHash() {
        return this.mgHash;
    }

    public void setMgHash(String mgHash) {
        this.mgHash = mgHash;
    }

    @Override
    public String toString() {
        return "{" +
            " memberHash='" + getMemberHash() + "'" +
            ", memberName='" + getMemberName() + "'" +
            ", pf_image='" + getPf_image() + "'" +
            ", mgHash='" + getMgHash() + "'" +
            "}";
    }


}
