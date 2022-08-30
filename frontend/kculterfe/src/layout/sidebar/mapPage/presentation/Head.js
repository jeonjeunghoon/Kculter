import React from 'react';

function Head({ imageUrl, head }) {
	return (
		<div className="head">
			<img src={imageUrl}></img>
			<h3>{head}</h3>
		</div>
	);
}

export default Head;