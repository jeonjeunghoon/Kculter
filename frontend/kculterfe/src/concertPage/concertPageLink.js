import React from 'react';
import { Link } from 'react-router-dom';

function ConcertPageLink() {
	return (
		<nav style={{border: '1px solid black'}}>
			<Link to="ConcertPage">Go to ConcertPage</Link>
		</nav>
	);
}

export default ConcertPageLink;