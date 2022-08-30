import React from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';
import Place from './Place';
import CourseBox from './CourseBox'
import '../map-sidebar.css';

function MapSideNav() {
	const place = useSelector(state => state.place);

	return (
		<div className="map-sidebar">
			{
				place.head &&
				place.imageUrl &&
				<Head
					imageUrl={place.imageUrl}
					head={place.head}
				/>
			}
			{
				place.fileUrl &&
				place.name &&
				<img className="place-img"
					src={place.fileUrl}
					alt={place.name}
					/>
			}
			<div className="map-sidebar-content">
				{
					place.name &&
					place.address &&
					<Place
						name={place.name}
						address={place.address}
						explain={place.explain}
					/>
				}
				{
					place &&
					<CourseBox
						place={place}
					/>
				}
			</div>
		</div>
	);
}

export default MapSideNav;