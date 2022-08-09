import React from 'react';
import {
	Marker,
	MarkerClusterer
} from '@react-google-maps/api';
import markerData from '../data/markerData.json';

function MapMarker() {
	const service = new window.google.maps.places.PlacesService();
	return (
		<MarkerClusterer>
			{clusterer => 
				markerData.map((item, index) => (
					<Marker
						key={index}
						title={item.title}
						img={item.img}
						position={item.pos}
						clusterer={clusterer}
						visible={true}
						onClick={() => alert(item.title)}
					/>
				))
			}
		</MarkerClusterer>
	);
}

export default MapMarker;