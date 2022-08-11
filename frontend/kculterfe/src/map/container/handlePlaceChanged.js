export function handlePlaceChanged(input, setCenter, setZoom, setSearch) {
	if (!input)
		return;
	const place = input.getPlace();
	const placeLength = Object.keys(place).length;
	if (place && placeLength > 1) {
		console.log(place);
		console.log(place.name);
		console.log(place.formatted_address);
		console.log(place.formatted_phone_number);
		console.log(place.types);
		console.log(place.geometry.location.lat());
		console.log(place.geometry.location.lng());
		setCenter({
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng(),
		});
		setZoom(15);
		setSearch(true);
	}
}