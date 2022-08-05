import React from 'react';
import {
	Link
} from 'react-router-dom';

function MapLink() {

	return (
		<nav style={{border: '1px solid black'}}>
			<Link
				to='MapPage'
			>
			Go to MapPage
			</Link>
		</nav>
	);
}

export default MapLink;
