package com.prac.react.model.dto;

public class FrontMember {
    private String memberHash;
    private String memberName;
    private String pfUrl;
    private String mgHash;

    public FrontMember() {
    }


    public FrontMember(String memberHash, String memberName, String pfUrl, String mgHash) {
        this.memberHash = memberHash;
        this.memberName = memberName;
        this.pfUrl = pfUrl;
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

    public String getPfUrl() {
        return this.pfUrl;
    }

    public void setPfUrl(String pfUrl) {
        this.pfUrl = pfUrl;
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
            ", pf_image='" + getPfUrl() + "'" +
            ", mgHash='" + getMgHash() + "'" +
            "}";
    }


}
