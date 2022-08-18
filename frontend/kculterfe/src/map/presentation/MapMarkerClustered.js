import React from 'react';
import {
	Marker,
	MarkerClusterer
} from '@react-google-maps/api';

function MapMarkerClustered({ markerData, setCenter, point }) {
	return (
		markerData
			?
				<MarkerClusterer>
					{clusterer =>
						point.map((item) => {
							const props = {
								key: item.placeNum,
								title: item.name,
								// icon: item.icon,
								pos: {
									lat: item.lat,
									lng: item.lng
								}
							}
							return (
								<Marker
									key={props.key}
									title={props.title}
									icon={props.icon}
  								zIndex={30}
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

export default MapMarkerClustered;