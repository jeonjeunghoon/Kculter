import React from 'react';
import {
	InfoWindow,
	Marker,
} from '@react-google-maps/api';

function CurrentInfoWindow({ center, current, geoService, loaded }) {
	return (
		current && loaded
			?
				geoService
					? <Marker
							position={center}
							visible={true}
							onClick={() => alert('Clicked Marker!')}
						/>
					: <InfoWindow
							position={center}
						>
							<h6>The Geolocation service failed.</h6>
						</InfoWindow>
			: <></>
	);
}

export default CurrentInfoWindow;