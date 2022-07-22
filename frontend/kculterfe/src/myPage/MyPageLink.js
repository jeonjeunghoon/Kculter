import React from 'react';
import { Link } from 'react-router-dom';

function MapLink() {
	return (
		<nav style={{border: '1px solid black'}}>
			<h3>Mypage Link</h3>
			<Link to="MyPage">Go to MyPage</Link>
		</nav>
	);
}

export default MapLink;