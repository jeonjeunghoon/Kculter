import React, {
	useState,
	useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import Head from './Head';
import Place from './Place';
import CourseBox from './CourseBox'
import '../map-sidebar.css';

function MapSideNav(props) {
	const place = useSelector(state => state.place);

	useEffect(() => {
	}, [place]);

	return (
		<div className="map-sidebar">
			{
				place.head &&
				<Head
					imageUrl={place.imageUrl}
					head={place.head}
				/>
			}
			{
				place.name &&
			<img className="place-img"
				src={place.fileUrl}
				alt={place.name}
				/>
			}
			{
				place.name &&
				<div className="map-sidebar-content">
					<Place
						name={place.name}
						address={place.address}
						explain={place.explain}
					/>
					<CourseBox
						place={place}
					/>
				</div>
			}
		</div>
	);
}

export default MapSideNav;