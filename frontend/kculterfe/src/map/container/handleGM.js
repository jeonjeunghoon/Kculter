import axios from 'axios';

export function handleClickGM(e, google, map, dispatch) {
	if (!e || !map || !e.placeId) { return; }
	const service = new window.google.maps.places.PlacesService(map);
	const request = {
		placeId: e.placeId,
		fields: ['ALL'],
	};
	service.getDetails(request, (place, status) => {
		if (
			status === google.maps.places.PlacesServiceStatus.OK &&
			place &&
			place.geometry &&
			place.geometry.location
		) {
			console.log(place, status);
			dispatch({
				type: "MAP_PLACE",
				data: place,
			})
		}
	})
}

export function handleDragEndGM(map, setCenter, setStayData) {
	if (!map) { return; }
	const google = window.google;
	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ location: map.getCenter() }, (result, status) => {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		if (status === google.maps.GeocoderStatus.OK) {
			const address = result[0].formatted_address;
			axios.get('/near/stay?lat='+map.getCenter().lat()+'&lng='+map.getCenter().lng()+'&address='+address)
			.then(function(res){
				console.log(res, '통신 완료');
				setStayData(res.data);
				setCenter({
					lat: map.getCenter().lat(),
					lng: map.getCenter().lng()
				});
  		})
  		.catch(function(error){
				console.log(error, "서버 통신 실패");
  		})
		}
	});
};