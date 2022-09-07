import {
	handleGoogleMarkerAndSearch,
} from "./handleOnMarker";

export function handleOnPlaceChangedAutocomplete(input, setCenter, setZoom, dispatch) {
	if (!input)
		return;
	const placeData = input.getPlace();
	console.log(placeData.geometry.location.lat(), placeData.geometry.location.lng());
	const placeDataLength = Object.keys(placeData).length;
	if (placeData && placeDataLength > 1) {
		handleGoogleMarkerAndSearch(placeData, "PLACE", setCenter, setZoom, dispatch);
	}
}