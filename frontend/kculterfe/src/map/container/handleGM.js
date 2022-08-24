import axios from 'axios';
import { handleGoogleMarkerAndSearch } from './handleOnFocus';

export function handleOnClickGM(e, google, map, setCenter, setZoom, dispatch) {
	if (!e || !map || !e.placeId) {
		return;
	}
	e.stop();
	const service = new window.google.maps.places.PlacesService(map);
	const request = {
		placeId: e.placeId,
		fields: ['ALL'],
	};
	service.getDetails(request, (placeData, status) => {
		if (
			status === google.maps.places.PlacesServiceStatus.OK &&
			placeData &&
			placeData.geometry &&
			placeData.geometry.location
		) {
			handleGoogleMarkerAndSearch(placeData, setCenter, setZoom, dispatch);
		}
	})
}

export function handleOnDragEndGM(map, setNear) {
	if (!map) {
		return;
	}
	const google = window.google;
	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ location: map.getCenter() }, (result, status) => {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		if (status === google.maps.GeocoderStatus.OK) {
			axios.get('/near/stay?lat='+map.getCenter().lat()+'&lng='+map.getCenter().lng()) // 근처 숙소
			.then(function(res){
				console.log(res, '통신 완료');
				const data = res.data.map((obj) => ({
						...obj,
						lat: Number(obj.mapy),
						lng: Number(obj.mapx)
					})
				);
				res.data = data;
				setNear(res);

  		})
  		.catch(function(error){
				console.log(error, "서버 통신 실패");
  		})
		}
	});
};
