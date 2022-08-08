package com.prac.react.model.dto;

public class LatLng {
	// 위도 y축
	private double lat;
	// 경도 x축
	private double lng;
	// Address
	private String address;

	@Override
	public String toString() {
		return "{" +
				" lat='" + getLat() + "'" +
				", lng='" + getLng() + "'" +
				", address='" + getAddress() + "'" +
				"}";
	}

	public LatLng(double lat, double lng, String address) {
		this.lat = lat;
		this.lng = lng;
		this.address = address;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LatLng() {
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

}
