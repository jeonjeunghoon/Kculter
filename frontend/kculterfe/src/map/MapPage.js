import React, { useState } from 'react';
import './MapPage.css';
import GoogleMap from './GoogleMap';
import { Link, useLocation } from 'react-router-dom';

const MapPage = () => {
	const location = useLocation();
	const { center } = location.state;
	const [zoom, setZoom] = useState(15);

	return (
		<div className='map-page'>
			<GoogleMap center={center} zoom={zoom} />
		</div>
	);
}

export default MapPage;
