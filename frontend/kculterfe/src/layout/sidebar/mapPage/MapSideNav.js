import React from 'react';
import { useSelector } from 'react-redux';

function MapSideNav() {
	const place = useSelector(state => state.place);
	const markerClick = useSelector(state => state.markerClick);
	console.log(markerClick);

	return (
		<div className="sidebar">
			<p>{markerClick.title}</p>
			<img src={markerClick.fileUrl}></img>
		</div>
	);
}

export default MapSideNav;