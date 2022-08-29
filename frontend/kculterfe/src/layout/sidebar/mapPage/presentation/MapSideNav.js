import React from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';
import Place from './Place';
import CourseBox from './CourseBox'
import '../map-sidebar.css';

function MapSideNav() {
	const place = useSelector(state => state.place);
	const pin = useSelector(state => state.pin.imageUrl);

	return (
		<div className="map-sidebar">
			{
				place.address &&
				<Head
					src={pin}
					head={place.head}
				/>
			}
			{
				place.fileUrl &&
				<img className="place-img"
					src={place.fileUrl}
					alt={place.name}
					/>
			}
			<div className="map-sidebar-content">
				<Place
					name={place.name}
					address={place.address}
					explain={place.explain}
				/>
				{
					place.name &&
					<CourseBox
						place={place}
					/>
				}
			</div>
		</div>
	);
}

export default MapSideNav;