import { CLICK_PLACE } from "../../redux/reducer";

function useFocusOn(place, setCenter, setZoom, dispatch) {
	setCenter({
		lat: place.lat,
		lng: place.lng
	});
	setZoom(15);
	dispatch({
		type: CLICK_PLACE,
		data: place
	});
}

export function handleCard(data, setCenter, setZoom, dispatch) {
	const place = {
		address: data.addr1,
		culture: "",
		explain: "",
		fileUrl: data.firstimage,
		kpop: "",
		name: data.title,
		courseName: "",
		lat: Number(data.mapy),
		lng: Number(data.mapx),
		placeNum: 0,
		placeType: 0,
		status: 0,
		tel: data.tel,
		contenttypeid: data.contenttypeid,
	}
	useFocusOn(place, setCenter, setZoom, dispatch);
}

export function handleCustomMarker(data, setCenter, setZoom, dispatch) {
	const place = {
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

export function handleGoogleMarkerAndSearch(data, setCenter, setZoom, dispatch) {
	const place = {
		address: data.formatted_address,
		culture: "",
		explain: "",
		fileUrl: data.photos[0].getUrl(),
		kpop: "",
		name: data.name,
		courseName: "",
		lat: data.geometry.location.lat(),
		lng: data.geometry.location.lng(),
		placeNum: 0,
		placeType: 0,
		status: 0,
		tel: data.international_phone_number,
	}
	useFocusOn(place, setCenter, setZoom, dispatch);
}