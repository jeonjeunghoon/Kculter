import React from 'react';
import './MapPage.css';
import GoogleMapApi from './GoogleMapApi';
import { useLocation } from 'react-router-dom';

const MapPage = () => {
	const location = useLocation();

	return (
		<div className='map-page'>
			<GoogleMapApi
				center={location.state.center}
				language={location.state.language}
				region={location.state.region}
				zoom={location.state.zoom}
			/>
		</div>
	);
}

export default MapPage;
