import React from 'react';
import { InfoWindow } from '@react-google-maps/api';

function CurrentInfoWindow({ center, current, browserHasGeolocation, geoService }) {
	console.log(current, browserHasGeolocation, geoService);
	return (
		current
			? 
				browserHasGeolocation && geoService
					? <InfoWindow
							position={center}
						>
							<h6>Location found</h6>
						</InfoWindow>
					: <InfoWindow
							position={center}
						>
							<h6>The Geolocation service failed.</h6>
						</InfoWindow>
			: <></>
	);
}

export default CurrentInfoWindow;