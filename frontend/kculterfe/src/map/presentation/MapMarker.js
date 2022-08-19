import React from 'react';
import {
	MarkerF,
} from '@react-google-maps/api';
import { CLICK_MARKER } from '../../redux/reducer';

function MapMarker({ place, setCenter, setZoom, dispatch }) {
	return (
		place.map((item) => {
			const props = {
				key: item.placeNum,
				title: item.name,
				// icon: item.icon,
				explain: item.explain,
				fileUrl: item.fileUrl,
				address: item.address,
				pos: {
					lat: item.lat,
					lng: item.lng
				}
			}
			return (
				<MarkerF
					key={props.key}
					title={props.title}
					// icon={props.icon}
  				zIndex={30}
					position={props.pos}
					onClick={() => {
						dispatch({
							type: CLICK_MARKER,
							data: props
						})
						setCenter(props.pos)
						setZoom(15)
					}}
				/>);
		})
	);
}

export default MapMarker;