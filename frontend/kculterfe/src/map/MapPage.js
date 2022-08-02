import React from 'react';
import './MapPage.css';
import GoogleMapRender from './GoogleMapRender';
import { useLocation } from 'react-router-dom';

function MapPage() {
	const location = useLocation();

	return (
		<div className='map-page'>
			<GoogleMapRender />
		</div>
	);
}

export default MapPage;
