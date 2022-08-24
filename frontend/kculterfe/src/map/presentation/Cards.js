import React from 'react';
import { handleCard } from '../container/handleOnFocus';

function Cards(props) {
	return (
		<div className="stay-card">
			<button
				onClick={() => {
					handleCard(props.item, props.setCenter, props.setZoom, props.dispatch);
				}}
			>
				<img
					src={props.item.firstimage}
					alt='Stay image'
				/>
			</button>
			<p>{props.item.title}</p>
		</div>
	);
}

export default Cards;