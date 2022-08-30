import React from 'react';
import {
	handleCard
} from '../container/handleOnMarker';

function Cards(props) {
	return (
		<div className="card-item">
			<button
				onClick={() => {
					handleCard(props.item, props.head, props.setCenter, props.setZoom, props.dispatch);
				}}
			>
				<img
					src={props.image}
					alt='Near'
				/>
				<p>
					{props.title}
				</p>
			</button>
		</div>
	);
}

export default Cards;