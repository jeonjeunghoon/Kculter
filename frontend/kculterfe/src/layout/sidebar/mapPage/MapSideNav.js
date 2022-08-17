import React from 'react';
import { useSelector } from 'react-redux';

function MapSideNav() {
	const place = useSelector(state => state.place);
	console.log(place);

	return (
		<div className="sidebar">
		</div>
	);
}

export default MapSideNav;