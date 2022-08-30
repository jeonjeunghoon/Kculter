import {
	CLICK_PLACE
} from "../../redux/reducer";

function useFocusOn(place, setCenter, setZoom, dispatch) {
	setCenter(() => ({
		lat: place.lat,
		lng: place.lng
	}));
	setZoom(() => 15);
	dispatch({
		type: CLICK_PLACE,
		data: place
	});
}

export function handleCard(data, head, setCenter, setZoom, dispatch) {
	const place = {
		head: head,
		imageUrl: "",
		address: data.addr1,
		culture: "",
		explain: "",
		fileUrl: data.firstimage,
		kpop: "",
		name: data.head,
		courseName: "",
		lat: Number(data.mapy),
		lng: Number(data.mapx),
		placeNum: 0,
		placeType: 0,
		status: 0,
	}
	useFocusOn(place, setCenter, setZoom, dispatch);
}

export function handleCustomMarker(data, head, setCenter, setZoom, dispatch, pin) {
	const place = {
		head: head,
		imageUrl: pin,
		address: data.address,
		culture: data.culture,
		explain: data.explain,
		fileUrl: data.fileUrl,
		kpop: data.kpop,
		name: data.name,
		courseName: "",
		lat: data.lat,
		lng: data.lng,
		placeNum: data.placeNum,
		placeType: data.placeType,
		status: data.status,
	}
	useFocusOn(place, setCenter, setZoom, dispatch);
}

export function handleGoogleMarkerAndSearch(data, head, setCenter, setZoom, dispatch) {
	const place = {
		head: head,
		imageUrl: "",
		address: data.formatted_address,
		culture: "",
		explain: "",
		fileUrl: "",
		kpop: "",
		name: data.name,
		courseName: "",
		lat: 0,
		lng: 0,
		placeNum: 0,
		placeType: 0,
		status: 0,
	}
	if (data.photos) {
		place.fileUrl = data.photos[0].getUrl();
	}
	if (
		data.geometry &&
		data.geometry.location) {
			place.lat = data.geometry.location.lat();
			place.lng = data.geometry.location.lng();
	}
	useFocusOn(place, setCenter, setZoom, dispatch);
}