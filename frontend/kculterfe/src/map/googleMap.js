import React from 'react';
import GoogleMapReact from 'google-map-react'

function GoogleMap(props) {
	const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

	const defaultProps = {
	  center: {
		lat: 0,
		lng: 0
	  },
	  zoom: 15
	};

	let center;
	if (!props.center) {
		center = defaultProps.center;
	} else {
		center = props.center;
	}

	return (
	  // Important! Always set the container height explicitly
	  <div style={{ height: '100vh', width: '100vw' }}>
		<GoogleMapReact
		  bootstrapURLKeys={{ key: `${apiKey}` }}
		  defaultCenter={center}
		  defaultZoom={defaultProps.zoom}
		>
		</GoogleMapReact>
	  </div>
	);
}

export default GoogleMap;