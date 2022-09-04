import React, {
	useState,
	useEffect,
} from 'react';
import {
	Link,
	useLocation,
} from 'react-router-dom';
import OffCanvasSidebar from '../../sidebar/offCanvasSidebar/offCanvasSidebar';
import logoBlack from '../../../src_asset/loginblack.png';
import './Header.css';

function Header(props) {
	const location = useLocation();
	const [img, setImg] = useState(null);
	const [title, setTitle] = useState(null);
	const [isOpen, setOpen] = useState(true);
	const sideClose = () => setOpen(false);
	const handleOpen = (e) => setOpen(e);

	useEffect(() => {
		switch (location.pathname) {
			case '/MapPage':
				setTitle((title) => "Map");
				setImg((img) => "https://i.pinimg.com/originals/7f/b0/c9/7fb0c94c6252c18e16ec4bde430cdf2b.png");
				break;
			case '/Mypage':
				setTitle((title) => "My Page");
				setImg((img) => "");
				break;
			case '/IdolListPage':
				setTitle((title) => "K-Culter");
				setImg((img) => "");
				break;
			case '/ConcertPage':
				setTitle((title) => "K-Culter");
				setImg((img) => "");
				break;
			case '/CulturePage':
				setTitle((title) => "K-Culter");
				setImg((img) => "");
				break;
			default:
				setTitle((title) => "Error");
				setImg((img) => "");
		}
	}, [location.pathname]);

	useEffect(() => {
		props.handleOpen(isOpen);
	}, [isOpen])

	return (
		<header>
			<div className='left'>
				<OffCanvasSidebar isOpen={isOpen} sideClose={sideClose} handleOpen={handleOpen}/>
				<img
					src={img}
					alt='logo'
				/>
				<p className='title'>
					{title}
				</p>
			</div>
			<div className='right'>
				<Link to='/'>
					<button className='logo'>
						<img className='logo-img'
							src={logoBlack}
							alt='logo'
						/>
					</button>
				</Link>
				<i className="bi bi-list"
					onClick={() => {
						setOpen(!isOpen);
					}}/>
			</div>
		</header>
	);
}

export default Header;