import React, {
	useState,
} from 'react';
import {
	Autocomplete,
} from '@react-google-maps/api';
import {
	handleOnPlaceChangedAutocomplete
} from '../container/handleAutocomplete';

function Search({ setCenter, setZoom, dispatch }) {
	const [input, setInput] = useState(null);

	return (
		<Autocomplete
			onLoad={autocomplete => setInput(autocomplete)}
			onPlaceChanged={() => handleOnPlaceChangedAutocomplete(input, setCenter, setZoom, dispatch)}
		>
			<input className='autocomplete-input'
        type="text"
        placeholder="Search place"
      />
		</Autocomplete>
	)
}

export default Search;