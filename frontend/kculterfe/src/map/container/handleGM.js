import axios from 'axios';
import { CLICK_MARKER } from '../../redux/reducer';

export function handleOnClickGM(e, google, map, dispatch, setCenter, setZoom) {
	if (!e || !map || !e.placeId) {
		return;
	}
	e.stop();
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
			setCenter({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			})
			setZoom(15)
			const newPlace = {
				head: "K-culter",
				placeNum: place.placeNum,
				name: place.name,
				address: place.formatted_address,
				fileUrl: place.photos[0].getUrl(),
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			}
			dispatch({
				type: CLICK_MARKER,
				data: newPlace,
			})
		}
	})
}

export function handleOnDragEndGM(map, setCenter) {
	if (!map) {
		return;
	}
	const google = window.google;
	const geocoder = new google.maps.Geocoder();
	console.log(map.getCenter().lat());
	geocoder.geocode({ location: map.getCenter() }, (result, status) => {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		if (status === google.maps.GeocoderStatus.OK) {
			axios.get('/near/stay?lat='+map.getCenter().lat()+'&lng='+map.getCenter().lng()) // 근처 숙소
			.then(function(res){
				console.log(res, '통신 완료');
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
