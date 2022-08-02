import React, { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
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

function GoogleMapRender() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		libraries: ['places'],
	});

	if (!isLoaded) {
		return (
			<div>
				Loading ...
			</div>
		);
	}

	return <Map />;
}

function Map() {
	const [center, setCenter] = useState({ lat: 37.5758772, lng: 126.9768121 });
	const [selected, setSelected] = useState(null);

	return (
		<div className='map-container'>
			<div className='places-container'>
				<PlacesAutocomplete setCenter={setCenter} setSelected={setSelected} />
			</div>

			<GoogleMap
				zoom={15}
				center={center}
				mapContainerClassName='map-container'
			>
				{selected && <Marker position={selected} />}
			</GoogleMap>
		</div>
	)
}

const PlacesAutocomplete = ({ setCenter, setSelected }) => {
	const {
		ready,
		value,
		setValue,
		suggestions: { status, data },
		clearSuggestions,
	} = usePlacesAutocomplete();

	const handleSelect = async (address) => {
		setValue(address, false);
		clearSuggestions();

		const results = await getGeocode({ address });
		const { lat, lng } = getLatLng(results[0]);
		setSelected({ lat, lng });
		setCenter({ lat, lng });
	}

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
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
	);
}

export default GoogleMapRender;