import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from './Map';
import './MapPage.css';

function MapPage(props) {
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		libraries: ['places'],
	});

	return (
		isLoaded ? <Map /> : <div>Loading ...</div>
	);
}

export default MapPage;