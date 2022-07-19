import React from 'react';
import { Link } from 'react-router-dom';

const MapNav = () => {
	const center = {
		lat: 0,
		lng: 0
	};
	const getPos = () => {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}
	const getGps = async() => {
		if (navigator.geolocation) { // geolocation API 액세스 여부 확인
			const pos = await getPos();
			return {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};
		} else {
			return {
				lat: 37.5758772,
				lng: 126.9768121
			}
		}
	}
	const run = async() => {
		const { lat, lng } = await getGps();
		center.lat = lat;
		center.lng = lng;
		console.log(center);
	};
	run();

	return (
		<div style={{border: '1px solid black'}}>
			<nav>
				<h3>MAP Link</h3>
				<Link to="MapPage"
					state={{
						center: center,
					}
				}>Go to MapPage</Link>
			</nav>
		</div>
	);
}

export default MapNav;