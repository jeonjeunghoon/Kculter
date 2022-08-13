import React, {
} from 'react';
import {
	InfoWindow,
	Marker,
} from '@react-google-maps/api';

function CurrentInfoWindow({ center, focus, current, geoService, loaded }) {
	return (
		current && loaded
			?
				geoService
					? <Marker
							position={focus}
							visible={true}
							// icon={}
							zIndex={5}
							onClick={() => alert('Clicked Marker!')}
						/>
					: <InfoWindow
							position={center}
						>
							<h6>The Geolocation service failed.</h6>
						</InfoWindow>
			:
				<></>
	);
}

export default CurrentInfoWindow;