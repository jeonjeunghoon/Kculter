import React from 'react';
import { Link } from 'react-router-dom';

function IdolListPageLink() {
	return (
		<nav style={{border: '1px solid black'}}>
			<Link to="IdolListPage">Go to IdolListPage</Link>
		</nav>
	);
}

export default IdolListPageLink;