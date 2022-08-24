import axios from 'axios';
import React, {
	useState,
	useEffect,
} from 'react';
import {
	Link,
	useLocation,
} from 'react-router-dom';
import './Header.css';
import MapLink from '../../../map/tmp/MapLink';
import OffCanvasSidebar from '../../sidebar/offCanvasSidebar/offCanvasSidebar';

function Header(props) {
	const [img, setImg] = useState('https://i.pinimg.com/originals/7f/b0/c9/7fb0c94c6252c18e16ec4bde430cdf2b.png');
	const [title, setTitle] = useState(null);
	const location = useLocation();
	const [isOpen, setOpen] = useState(true);
	const sideClose = () => setOpen(false);

	useEffect(() => {
		switch (location.pathname) {
			case '/MapPage':
				setTitle('Map');
				// setImg('');
				break;
			case '/Mypage':
				setTitle('My Page');
				setImg('');
				break;
			case '/ConcertPage':
				setTitle('Concert');
				setImg('');
				break;
			default:
				setTitle('Error');
				setImg('');
		}
	}, []);

	useEffect(() => {
		props.handleOpen(isOpen);
		console.log(isOpen);
	}, [isOpen])

	return (
		<header>
			<div className='left'>
				<OffCanvasSidebar isOpen={isOpen} sideClose={sideClose}/>
				<img
					src={img}
					alt='logo'
				/>
				<p>{title}</p>
			</div>
			<MapLink />
			<div className='right'>
				<Link to='/'>
					<button className='logo'>
						<img className='logo-img'
							src='https://upload.wikimedia.org/wikipedia/commons/2/22/Transparent_letter_K_in_a_red_circle.png'
							alt='logo'
						/>
					</button>
				</Link>
				<i class="bi bi-list" onClick={() => {
						setOpen(!isOpen);
					}}/>
			</div>
		</header>
	);
}

export default Header;