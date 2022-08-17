import React from 'react';
import {
	Marker,
	MarkerClusterer
} from '@react-google-maps/api';

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
								icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAdUlEQVR4AWMYOWAU/AfhYWMBCxA3A/FlIN4MxN7I6gjg80DcD8QC+CzIxqIxH6aOSHwfYQmmBZexuQymjgTcj8uCz1gUHybDgvO4LFiMRXE4GRb8x2UBDxCXQ8PxPdSrLNSxAD+g3ALCeNQCKoHhZcHAg1EAAM3cyWj3TGxhAAAAAElFTkSuQmCC",
								pos: {
									lat: Number(item.lat),
									lng: Number(item.lng)
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

export default MapMarker;