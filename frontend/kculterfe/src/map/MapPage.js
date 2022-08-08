import React from 'react';
import {
	useJsApiLoader
} from '@react-google-maps/api';
import MapRender from './presentation/MapRender';
import './style/MapPage.css';

function MapPage(props) {
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'ko',
		libraries: ['places'],
	});

	return (
		isLoaded
			?
				<MapRender />
			:
				<div>Loading ...</div>
	);
}

export default MapPage;