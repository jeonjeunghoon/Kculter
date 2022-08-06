package com.prac.react.model.dto;

public class LatLng {
	// 위도 y축
	private double lat;
	// 경도 x축
	private double lng;

	@Override
	public String toString() {
		return "{" +
				" lat='" + getLat() + "'" +
				", lng='" + getLng() + "'" +
				"}";
	}

	public LatLng(double lat, double lng) {
		this.lat = lat;
		this.lng = lng;
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
