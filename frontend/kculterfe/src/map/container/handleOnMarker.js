import {
	CLICK_PLACE
} from "../../redux/reducer";
import stayLogo from '../../src_asset/stay_logo.png';

function useFocusOn(place, setCenter, setZoom, dispatch) {
	setCenter(() => ({
		lat: place.lat,
		lng: place.lng
	}));
	setZoom(() => 17);
	dispatch({
		type: CLICK_PLACE,
		data: place
	});
}

export function handleCard(data, head, setCenter, setZoom, dispatch) {
	const place = {
		head: head,
		imageUrl: stayLogo,
		address: data.addr1,
		culture: "",
		explain: "",
		fileUrl: data.firstimage,
		kpop: "",
		name: data.title,
		lat: Number(data.mapy),
		lng: Number(data.mapx),
		placeHash: "0",
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
		lat: data.lat,
		lng: data.lng,
		placeHash: data.placeHash,
		placeType: data.placeType,
		status: data.status,
	}
	useFocusOn(place, setCenter, setZoom, dispatch);
}

export function handleGoogleMarkerAndSearch(data, head, setCenter, setZoom, dispatch) {
	const place = {
		head: head,
		imageUrl: data.imageUrl,
		address: data.formatted_address,
		culture: "",
		explain: "",
		fileUrl: "",
		kpop: "",
		name: data.name,
		lat: 0,
		lng: 0,
		placeHash: "0",
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