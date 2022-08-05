import axios from 'axios';

export function handleCenterChanged(mapref, setCenter) {
	if (mapref) {
		const newCenter = mapref.getCenter();
		const newLat = newCenter.lat();
		const newLng = newCenter.lng();
	
		setCenter({
			lat: newLat,
			lng: newLng,
		})
	}
	// axios.get('');
};

export function handleCurrent(map, setCenter, current, setCurrent, setGeoService, setLoaded, setMapRef) {
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

export function handleOnLoad (map, setCenter, current, setCurrent, setGeoService, setLoaded, setMapRef) {
	// 현재 위치 버튼
	handleCurrent(map, setCenter, current, setCurrent, setGeoService, setLoaded);
	setMapRef(map);
};