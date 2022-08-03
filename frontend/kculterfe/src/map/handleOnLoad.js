const google = window.google;

function handleCurrent(map, setCenter, setCurrent, setBrowserHasGeolocation, setGeoService) {
	const locationButton = document.createElement('button');
	locationButton.textContent = 'Pan to Current Location';
	locationButton.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
	locationButton.addEventListener("click", () => {
		// Try HTML5 geolocation.
    if (navigator.geolocation) {
			setCurrent(true);
			setBrowserHasGeolocation(true);
      navigator.geolocation.getCurrentPosition(
				(position) => {
					const pos = {
						lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
					setGeoService(true);
					setCenter(pos);
        },
        () => {
					setGeoService(false);
        }
      );
    } else {
			setCurrent(true);
			setBrowserHasGeolocation(false);
			setGeoService(false);
    }
  });
}

export function handleOnLoad (map, setCenter, setCurrent, setBrowserHasGeolocation, setGeoService) {
	// 현재 위치 버튼
	handleCurrent(map, setCenter, setCurrent, setBrowserHasGeolocation, setGeoService);
};