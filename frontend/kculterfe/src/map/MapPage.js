import React, { useState } from 'react';
import './MapPage.css';
import GoogleMap from './GoogleMap';
import { Link, useLocation } from 'react-router-dom';

const MapPage = () => {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
	}

	const location = useLocation();
	const { center } = location.state;

	return (
		<div className='map-page'>
			<nav>
				<h1>NAV</h1>
			</nav>
			<header>
				<h4>HEADER</h4>
			</header>
			<div className='search'>
				<Link to='/'>
					<button>Go Back</button>
				</Link>
				<input
					type='text'
					value={search}
					onChange={onChange}
				/>
			</div>
			<div className='content'>
				<GoogleMap center={center} />
			</div>
		</div>
	);
}

export default MapPage;