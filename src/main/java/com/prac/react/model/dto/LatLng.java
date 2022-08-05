package com.prac.react.model.dto;

public class LatLng {
	// 위도 y축
	private long lat;
	// 경도 x축
	private long lng;

	@Override
	public String toString() {
		return "{" +
				" lat='" + getLat() + "'" +
				", lng='" + getLng() + "'" +
				"}";
	}

	public LatLng(long lat, long lng) {
		this.lat = lat;
		this.lng = lng;
	}

	public LatLng() {
	}

	public long getLat() {
		return this.lat;
	}

	public void setLat(long lat) {
		this.lat = lat;
	}

	public long getLng() {
		return this.lng;
	}

	public void setLng(long lng) {
		this.lng = lng;
	}

}
