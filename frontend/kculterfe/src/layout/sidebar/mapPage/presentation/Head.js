import React from 'react';

function Head(props) {
	return (
		<div className="head">
			<img src={props.imageUrl}></img>
			<p>{props.head}</p>
		</div>
	);
}

export default Head;