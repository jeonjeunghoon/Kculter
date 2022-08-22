import React from 'react';
import CustomMarker from './CustomMarker';
import { useSelector } from 'react-redux';

function MapMarker(props) {
	return (
		<div>
			{/* KCULTER 마커 */}
			<CustomMarker
				place={props.place}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
				pin={props.pin}
			/>
			{/* 코스 마커 */}
			<CustomMarker
				place={useSelector(state => state.course)}
				setCenter={props.setCenter}
				setZoom={props.setZoom}
				dispatch={props.dispatch}
				pin={props.pin}
			/>
		</div>
	);
}

export default MapMarker;