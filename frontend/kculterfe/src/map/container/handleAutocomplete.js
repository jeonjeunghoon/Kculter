import { handleGoogleMarkerAndSearch, handleOnFocus } from "./handleOnFocus";

export function handleOnPlaceChangedAutocomplete(input, setCenter, setZoom, dispatch) {
	if (!input)
		return;
	const placeData = input.getPlace();
	const placeDataLength = Object.keys(placeData).length;
	if (placeData && placeDataLength > 1) {
		handleGoogleMarkerAndSearch(placeData, setCenter, setZoom, dispatch);
	}
}