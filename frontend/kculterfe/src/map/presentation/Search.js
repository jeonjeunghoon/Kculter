import React, {
	useState,
} from 'react';
import {
	Marker,
	Autocomplete,
} from '@react-google-maps/api';
import { handleOnPlaceChangedAutocomplete } from '../container/handleAutocomplete';
import { handleOnClickMarker } from '../container/handleMarker'

function Search({ setCenter, setZoom, dispatch }) {
	const [input, setInput] = useState(null);
	const [focus, setFocus] = useState(null);
	const [search, setSearch] = useState(false);

	return (
		<div>
			<Autocomplete
						onLoad={autocomplete => setInput(autocomplete)}
						onPlaceChanged={() => handleOnPlaceChangedAutocomplete(input, setCenter, setZoom, setSearch, setFocus, dispatch)}
					>
						<input className='autocomplete-input'
    	        type="text"
    	        placeholder="Search place"
    	      />
			</Autocomplete>
			{search
				?
					<Marker
					position={focus}
					visible={true}
					onClick={() => handleOnClickMarker(input, search, dispatch)}
					/>
				:
					<></>
			}
		</div>
	)
}

export default Search;