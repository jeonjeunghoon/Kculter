import React from 'react';

function Head({ src, head }) {
	return (
		<div className="head">
			<img src={src}></img>
			<h3>{head}</h3>
		</div>
	);
}

export default Head;