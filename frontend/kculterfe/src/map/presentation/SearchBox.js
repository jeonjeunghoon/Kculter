import React from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const SearchBox = ({ setCenter, setZoom }) => {
	const {
		ready,
		value,
		setValue,
		suggestions: {
			status,
			data,
		},
		clearSuggestions,
	} = usePlacesAutocomplete();

	async function handleSelect (address) {
		setValue(address, false);
		clearSuggestions();
	
		const results = await getGeocode({ address });
		const { lat, lng } = getLatLng(results[0]);
		setCenter({ lat, lng });
		const service = new window.google.maps.places.PlacesService();
		setZoom(15);
	}

	return (
		<div className='places-container'>
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={e => setValue(e.target.value)}
				disabled={!ready}
				className='combobox-input'
				placeholder='Search an address'
			/>
			<ComboboxPopover>
				<ComboboxList>
					{status === 'OK' && 
						data.map(({ place_id, description }) => (
							<ComboboxOption key={place_id} value={description} />
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
		</div>
	);
}

export default SearchBox;