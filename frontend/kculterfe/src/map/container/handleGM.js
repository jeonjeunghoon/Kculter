import axios from 'axios';
import {
	handleGoogleMarkerAndSearch
} from './handleOnMarker';
import {
	CLEAR_COURSE,
	CLEAR_PLACE
} from '../../redux/reducer';

export function handleOnUnmount(map, setMap, dispatch) {
	setMap(() => map);
	dispatch({
		type: CLEAR_COURSE,
		data: [],
	})
	dispatch({
		type: CLEAR_PLACE,
		data: {
			address: "",
			culture: "",
			explain: "",
			fileUrl: "",
			kpop: "",
			name: "",
			courseName: "",
			memberNum: 0,
			lat: 0,
			lng: 0,
			placeNum: 0,
			placeType: 0,
			status: 0,
		},
	})
}

export function handleOnLoad(map, setMap, url, setNear) {
	setMap(() => map);
	handleOnDragEndGM(map, url, setNear);
}

export function handleOnClickGM(map, e, google, setCenter, setZoom, dispatch) {
	if (!e || !map || !e.placeId) {
		return;
	}
	e.stop();
	const service = new window.google.maps.places.PlacesService(map);
	const request = {
		placeId: e.placeId,
		fields: [
			"formatted_address",
			"international_phone_number",
			"name",
			"photos",
			"geometry"
		],
	};
	service.getDetails(request, (placeData, status) => {
		if (
			status === google.maps.places.PlacesServiceStatus.OK &&
			placeData &&
			placeData.geometry &&
			placeData.geometry.location
		) {
			handleGoogleMarkerAndSearch(placeData, "PLACE", setCenter, setZoom, dispatch);
		}
	})
}

export function handleOnDragEndGM(map, url, setNear) {
	if (!map || !url) {
		return;
	}
	const google = window.google;
	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ location: map.getCenter() }, (result, status) => {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		if (status === google.maps.GeocoderStatus.OK) {
			axios.get(url + map.getCenter().lat() + '&lng=' + map.getCenter().lng())
			.then(function(res){
				const data = res.data.map((item) => {
					const end = item.title.indexOf('(');
					if (end !== -1) {
						item.title = item.title.slice(0, end - 1);
					}
					const obj = {
						lat: Number(item.mapy),
						lng: Number(item.mapx)
					}
					Object.assign(item, obj);
					return (item);
				})
				res.data = data;
				setNear(() => res);
  		})
  		.catch(function(error){
				console.log(error, "서버 통신 실패");
				setNear(() => null);
  		})
		}
	});
};
