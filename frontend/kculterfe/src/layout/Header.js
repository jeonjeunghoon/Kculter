import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
	const [img, setImg] = useState('https://i.pinimg.com/originals/7f/b0/c9/7fb0c94c6252c18e16ec4bde430cdf2b.png');
	const [title, setTitle] = useState('Main');
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/MapPage':
				setTitle('Map');
				// setImg('');
				break;
			case '/MyPage':
				setTitle('My Page');
				// setImg('');
				break;
			case '/ConcertPage':
				setTitle('Concert');
				// setImg('');
				break;
			default:
				setTitle('Error');
				// setImg('');
		}
	});

	return (
		<header>
			<div className='left'>
				<img
					src={img}
					alt='logo'
				/>
				<p>{title}</p>
			</div>
			<div className='right'>
				<Link to='/'>
					<button className='logo'>
						<img className='logo-img'
							src='https://upload.wikimedia.org/wikipedia/commons/2/22/Transparent_letter_K_in_a_red_circle.png'
							alt='logo'
						/>
					</button>
				</Link>
				<img className='menu'
					src='https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png'
					alt='menu'
				/>
			</div>
		</header>
	);
}

export default Header;