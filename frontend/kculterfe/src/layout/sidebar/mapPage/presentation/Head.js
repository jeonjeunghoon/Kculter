import React from 'react';

function Head(props) {
	return (
		<div className="head">
			<img src={props.imageUrl}></img>
			<h3>{props.head}</h3>
		</div>
	);
}

export default Head;