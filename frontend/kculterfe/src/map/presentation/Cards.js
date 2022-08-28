import React from 'react';
import {
	handleCard
} from '../container/handleOnMarker';

function Cards(props) {
	let image = null;
	if (props.item.firstimage) {
		image = props.item.firstimage;
	} else {
		image = "https://www.pngall.com/wp-content/uploads/5/Hotel-PNG-Image.png";
	}
	return (
		<div className="card-item">
			<button
				onClick={() => {
					handleCard(props.item, props.setCenter, props.setZoom, props.dispatch);
				}}
			>
				<img
					src={image}
					alt='Stay image'
				/>
			</button>
		</div>
	);
}

export default Cards;