import React, {
	useState,
	useEffect,
} from 'react';
import {
	handleCard
} from '../container/handleOnMarker';

function Cards(props) {
	const [image, setImage] = useState("");
	const [head, setHead] = useState("");

	useEffect(() => {
		if (props.isStay === true) {
			setHead(() => "STAY");
			if (props.item.firstimage) {
				setImage(() => props.item.firstimage);
			}
		} else {
			setHead(() => "TOUR");
			if (props.item.firstimage) {
				setImage(() => props.item.firstimage);
			}
		}
	}, [props.isStay])
	return (
		<div className="card-item">
			<button
				onClick={() => {
					console.log(head);
					handleCard(props.item, head, props.setCenter, props.setZoom, props.dispatch);
				}}
			>
				<img
					src={image}
					alt='Stay image'
				/>
				<p>
					{props.item.title}
				</p>
			</button>
		</div>
	);
}

export default Cards;