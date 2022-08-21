import React, {
	useEffect,
	useState,
} from 'react';
import {
	MarkerF,
} from '@react-google-maps/api';
import { CLICK_MARKER } from '../../redux/reducer';
import { useSelector } from 'react-redux';

function CustomMarker(props) {
	const [place, setPlace] = useState(null);

	useEffect(() => {
		setPlace(props.place);
		console.log(place);
	})
	return (
		place &&
		place.map((item, index) => {
			return (
				<MarkerF
					key={index}
					title={item.name}
					icon={item.icon}
  				zIndex={30}
					position={{
						lat: item.lat,
						lng: item.lng
					}}
					onClick={() => {
						props.dispatch({
							type: CLICK_MARKER,
							data: item
						})
						props.setCenter({
							lat: item.lat,
							lng: item.lng
						})
						props.setZoom(15)
					}}
				/>
			);
		})
	);
}

function MapMarker(props) {
	return (
		<div>
			<CustomMarker place={props.place} setCenter={props.setCenter} setZoom={props.setZoom} dispatch={props.dispatch}/>
			<CustomMarker place={useSelector(state => state.course)} setCenter={props.setCenter} setZoom={props.setZoom} dispatch={props.dispatch}/>
		</div>
	);
}

export default MapMarker;