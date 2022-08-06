import axios from 'axios';

export function handleCenterChanged(mapref, setCenter) {
	if (mapref) {
		const newCenter = mapref.getCenter();
		const newPos = {
			lat: newCenter.lat(),
			lng: newCenter.lng(),
		}
		setCenter(newPos);
		const json = JSON.stringify(newPos);
		axios.get('/near/stay?lat='+newPos.lat+'&lng='+newPos.lng)
    .then(function(res){
			alert('통신 완료');
    })
    .catch(function(error){
        console.log(error);
        alert("서버 통신 실패");
    })
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
