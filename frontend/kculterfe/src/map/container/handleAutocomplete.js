export function handlePlaceChangedAutocomplete(input, setCenter, setZoom, setSearch, setFocus) {
	if (!input)
		return;
	const place = input.getPlace();
	const placeLength = Object.keys(place).length;
	if (place && placeLength > 1) {
		console.log(place);
		setCenter({
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng(),
		});
		setFocus({
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng(),
		});
		setZoom(15);
		setSearch(true);
	}
}