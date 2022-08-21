import React from 'react';
import CustomMarker from './CustomMarker';
import { useSelector } from 'react-redux';

function MapMarker(props) {
	return (
		<div>
			<CustomMarker place={props.place} setCenter={props.setCenter} setZoom={props.setZoom} dispatch={props.dispatch}/>
			<CustomMarker place={useSelector(state => state.course)} setCenter={props.setCenter} setZoom={props.setZoom} dispatch={props.dispatch}/>
		</div>
	);
}

export default MapMarker;