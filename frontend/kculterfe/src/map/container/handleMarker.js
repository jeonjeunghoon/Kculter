import { CLICK_MARKER } from '../../redux/reducer';

export function handleOnClickMarker(input, search, dispatch) {
	if (!search || !input) {
		return;
	}
	const place = input.getPlace();
	const placeLength = Object.keys(place).length;
	if (place && placeLength > 1) {
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
};