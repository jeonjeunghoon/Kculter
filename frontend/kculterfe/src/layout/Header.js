import { Link } from 'react-router-dom';

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
				<Link to='/'>
					<button className="logo">
						<img className="logo-img"
							src="https://upload.wikimedia.org/wikipedia/commons/2/22/Transparent_letter_K_in_a_red_circle.png"
							alt="logo"
						/>
					</button>
				</Link>
				<img className="menu"
					src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
					alt="menu"
				/>
			</div>
		</header>
	);
}

export default Header;