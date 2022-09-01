package com.prac.react.model.dto;

public class Member {
	private int memberNum;
	private String memberNumHash;
	private String email;
	private String pwd;
	private String nickName;
	private String countryCode;
	private int age;
	private String gender;
	private String pfUrl;
	private int mg;
	private int status;

	public Member() {
	}

	public Member(int memberNum, String email, String pwd, String nickName, String countryCode, int age, String gender, String pfUrl) {
		this.memberNum = memberNum;
		this.email = email;
		this.pwd = pwd;
		this.nickName = nickName;
		this.countryCode = countryCode;
		this.age = age;
		this.gender = gender;
		this.pfUrl = pfUrl;
	}


	public int getMemberNum() {
		return this.memberNum;
	}

	public void setMemberNum(int memberNum) {
		this.memberNum = memberNum;
	}

	public String getMemberNumHash() {
		return this.memberNumHash;
	}

	public void setMemberNumHash(String memberNumHash) {
		this.memberNumHash = memberNumHash;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return this.pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getNickName() {
		return this.nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getCountryCode() {
		return this.countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPfUrl() {
		return this.pfUrl;
	}

	public void setPfUrl(String pfUrl) {
		this.pfUrl = pfUrl;
	}

	public int getMg() {
		return this.mg;
	}

	public void setMg(int mg) {
		this.mg = mg;
	}

	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "{" +
			" memberNum='" + getMemberNum() + "'" +
			", memberNumHash='" + getMemberNumHash() + "'" +
			", email='" + getEmail() + "'" +
			", pwd='" + getPwd() + "'" +
			", nickName='" + getNickName() + "'" +
			", countryCode='" + getCountryCode() + "'" +
			", age='" + getAge() + "'" +
			", gender='" + getGender() + "'" +
			", pfUrl='" + getPfUrl() + "'" +
			", mg='" + getMg() + "'" +
			", status='" + getStatus() + "'" +
			"}";
	}


}