import React from 'react';
import {
	Marker,
	MarkerClusterer
} from '@react-google-maps/api';
// import markerData from '../data/markerData.json';

function MapMarker({stayData, setCenter}) {
	return (
		stayData
			?
				<MarkerClusterer>
					{clusterer => 
						stayData.map((item) => {
							const props = {
								key: Number(item.lat) + Number(item.lng),
								title: item.title,
								// img: item.pinImg,
								pos: {
									lat: Number(item.lat),
									lng: Number(item.lng)
								}
							}
							return (
								<Marker
									key={props.key}
									title={props.title}
									// img={img}
									position={props.pos}
									clusterer={clusterer}
									visible={true}
									onClick={() => {
										alert(props.title)
										setCenter(props.pos)
									}}
								/>);
						})
					}
				</MarkerClusterer>
			:
				<></>
	);
}

export default MapMarker;