import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import SelectBar from './SelectBar';

const SideNav = () => {
	return (
		<nav className="side-nav">
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

const Search = () => {
	const [search, setSearch] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
	}

	return (
		<div className='search'>
			<div className="left">
				<Link to='/'>
					<button>&lt;</button>
				</Link>
				<input // 검색창 form 알아보기
					type='text'
					value={search}
					onChange={onChange}
				/>
			</div>
			<div className="right">
				<SelectBar />
			</div>
		</div>
	);
}

const Header = () => {
	return (
		<header>
			<div className="left">
				<img
					src="https://i.pinimg.com/originals/7f/b0/c9/7fb0c94c6252c18e16ec4bde430cdf2b.png"
					alt="Map logo"
				/>
				<p>Map</p>
			</div>
			<div className="right">
				<img className="logo"
					src="https://upload.wikimedia.org/wikipedia/commons/2/22/Transparent_letter_K_in_a_red_circle.png"
					alt="logo"
				/>
				<img className="menu"
					src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
					alt="menu"
				/>
			</div>
		</header>
	);
}

const Layout = () => {
	return (
		<div className='layout'>
			<SideNav />
			<Header />
			<Search />
			<Outlet />
		</div>
	);
}

export default Layout;