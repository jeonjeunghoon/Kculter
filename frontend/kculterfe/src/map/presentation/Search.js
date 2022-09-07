import React, {
	useEffect,
	useState,
} from 'react';
import {
	Autocomplete,
} from '@react-google-maps/api';
import {
	handleOnPlaceChangedAutocomplete
} from '../container/handleAutocomplete';

function handleOnLoadAutocomplete(autocomplete, setInput, concert) {
	setInput(() => autocomplete);
	// if (concert.lat !== 0 && concert.lng !== 0) {
	// }
}

function Search({ setCenter, setZoom, dispatch }) {
	const [input, setInput] = useState(null);

	return (
		<Autocomplete
			onLoad={autocomplete => handleOnLoadAutocomplete(autocomplete, setInput)}
			onPlaceChanged={() => handleOnPlaceChangedAutocomplete(input, setCenter, setZoom, dispatch)}
		>
			<div className="search-box">
				<div className="input-holder">
				    <input className='autocomplete-input'
							type="text"
							placeholder="Search place"
						/>
				</div>
			</div>
		</Autocomplete>
	)
}

export default Search;