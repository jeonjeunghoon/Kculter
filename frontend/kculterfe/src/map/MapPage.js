import React, { useState } from 'react';
import './MapPage.css';
import GoogleMap from './GoogleMap';
import { Link, useLocation } from 'react-router-dom';

const MapNav = () => {
	return (
		<nav className="map-nav">
			
		</nav>
	);
}

const MapHeader = () => {
	return (
		<header className="map-header">
			<h4>HEADER</h4>
		</header>
	);
}

const MapSearch = () => {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
	}

	return (
		<div className='map-search'>
			<Link to='/'>
				<button>Go Back</button>
			</Link>
			<input
				type='text'
				value={search}
				onChange={onChange}
			/>
		</div>
	);
}

const MapContent = () => {
	const location = useLocation();
	const { center } = location.state;

	return (
		<div className='map-content'>
			<GoogleMap center={center} />
		</div>
	);
}

const MapPage = () => {
	return (
		<div className='map-page'>
			<MapNav />
			<MapHeader />
			<MapSearch />
			<MapContent />
		</div>
	);
}

export default MapPage;
