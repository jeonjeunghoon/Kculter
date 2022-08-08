import React, {
	useState,
} from 'react';
import axios from 'axios';

export function handleCenterChanged(mapref, setCenter) {
	const google = window.google;

	if (mapref) {
		const newCenter = mapref.getCenter();
		const newPos = {
			lat: newCenter.lat(),
			lng: newCenter.lng(),
		}
		setCenter(newPos);

		// reverse geocoder
		const geocoder = new google.maps.Geocoder();
		geocoder.geocode({'latLng': newPos}, (result, status) => {
			if (status !== google.maps.GeocoderStatus.OK) {
				alert(status);
			}
			if (status == google.maps.GeocoderStatus.OK) {
				const address = result[0].formatted_address;
				axios.get('/near/stay?lat='+newPos.lat+'&lng='+newPos.lng+'&address='+address)
				.then(function(res){
					console.log(res, '통신 완료');
    		})
    		.catch(function(error){
					console.log(error, "서버 통신 실패");
    		})
			}
		});
	}
};

export function handleCurrent(map, setCenter, setCurrent, setGeoService, setLoaded, setFocus) {
	const locationButton = document.createElement('button');
	const google = window.google;

	locationButton.textContent = 'Pan to Current Location';
	locationButton.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
	locationButton.addEventListener("click", () => {
		// Try HTML5 geolocation.
		setCurrent(true);
    if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const pos = {
						lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
					setCenter(pos);
					setFocus(pos);
					setGeoService(true);
					setLoaded(true);
				},
        () => {
					setGeoService(false);
					setLoaded(true);
        }
      );
    } else {
			setGeoService(false);
			setLoaded(true);
    }
  });
}

export function handleOnLoad (map, setCenter, setCurrent, setGeoService, setLoaded, setFocus, setMapRef) {
	// 현재 위치 버튼
	handleCurrent(map, setCenter, setCurrent, setGeoService, setLoaded, setFocus);
	setMapRef(map);
};
