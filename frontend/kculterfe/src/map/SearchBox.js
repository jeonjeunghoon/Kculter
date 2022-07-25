import React, { useEffect, useCallback, useRef } from 'react';

const SearchBox = ({ mapApi }) => {
	const input = useRef(null);
	const searchBox = useRef(null);

	const handleOnPlacesChanged = useCallback(() => {
		console.log(searchBox.current.getPlaces());
		const places = searchBox.current.getPlaces();
		if (places) {
			console.log(
				places[0].geometry.location.lat(),
				places[0].geometry.location.lng()
			);
		}
	}, [searchBox]);

	useEffect(() => {
		if (!searchBox.current && mapApi) {
			searchBox.current = new mapApi.places.SearchBox(input.current);
			searchBox.current.addListener("places_changed", handleOnPlacesChanged);
		}

		return() => {
			if (mapApi) {
				searchBox.current = null;
				mapApi.event.clearInstanceListeners(searchBox);
			}
		};
	}, [mapApi, handleOnPlacesChanged]);

	return (
		<input
			ref={input}
			type="text"
			placeholder='Search Box'
		/>
	);
}

export default SearchBox;