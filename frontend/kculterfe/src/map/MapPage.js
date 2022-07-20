import React, { useState } from 'react';
import './MapPage.css';
import GoogleMap from './GoogleMap';
import { Link, useLocation } from 'react-router-dom';

const MapNav = () => {
	return (
		<nav className="map-nav">
			<div className="idol">
				<img
					src="https://lh3.googleusercontent.com/-FzskTh6S9uI/YbVqhdkz-NI/AAAAAAAABhY/H7HgifUO4gsk8vHrXW6OG2uV72F1c47vACNcBGAsYHQ/s1600/1639279211589306-0.png"
					alt="BTS"
				/>
				<p>BTS</p>
			</div>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaITc6o0LgRVrKPNR6H8iyDsPfgzcJ9IH6A&usqp=CAU"
				alt="Gyeongbokgung"
			/>
			<div className="location">
				Gyeongbokgung
				Culture landmark
			</div>
			<div className="뭐지">
				<div className="favorite">
					Favorite
				</div>
				<div className="description">
					Description +
				</div>
			</div>
			<div className="info">
				story

				info info info info info info info info info info info 
			</div>
			<div className="photos">
				Photos child
			</div>
			<div className="delete">
				delete button
			</div>
			<div className="course">
				courses child
				Make your own course
			</div>
			<div className="add">
				add button
			</div>
		</nav>
	);
}

const MapHeader = () => {
	return (
		<header className="map-header">
			<div className="left">
				<img
					src="https://i.pinimg.com/originals/7f/b0/c9/7fb0c94c6252c18e16ec4bde430cdf2b.png"
					alt="Map logo"
				/>
				<p>Map</p>
			</div>
			<div className="right">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
					alt="Kculter logo"
				/>
				<div className="list">
					<p>list</p>
				</div>
			</div>
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
			<div className="left">
				<Link to='/'>
					<button>Go Back</button>
				</Link>
				<input
					type='text'
					value={search}
					onChange={onChange}
				/>
			</div>
			<div className="right">
				right
			</div>
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
