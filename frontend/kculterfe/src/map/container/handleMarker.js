export function handleClickMarker(input, search) {
	if (!search || !input) { return; }
	const place = input.getPlace();
	const placeLength = Object.keys(place).length;
	if (place && placeLength > 1) {
		console.log(place);
	}
};