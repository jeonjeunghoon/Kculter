import React from 'react';
import { Link } from 'react-router-dom';

function MapLink() {
	// const defaultProps = {
	// 	center: {
	// 		lat: 37.5758772,
	// 		lng: 126.9768121
	// 	},
	// 	language: null,
	// 	region: null,
	// 	zoom: 15,
	// }

	return (
		<nav style={{border: '1px solid black'}}>
			<Link
				to='MapPage'
				// state={{
				// 	center: defaultProps.center,
				// 	language: defaultProps.language,
				// 	region: defaultProps.region,
				// 	zoom: defaultProps.zoom
				// }}
			>
			Go to MapPage
			</Link>
		</nav>
	);
}

export default MapLink;