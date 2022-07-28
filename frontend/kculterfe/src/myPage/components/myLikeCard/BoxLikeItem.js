import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "../../styles/Card.css"

function BoxLikeItem({ props }) {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={props.img} />
				<div className="image-title"><h3>{props.title}</h3></div>
			</div>
			<div className="card-content">
				<div className="like-num">
					<img src={props.img} />
					<p>likeImg<br></br>Likes</p>
				</div>
				<div className="spot-num">
					<img src={props.img} />
					<p>spotNum<br></br>Likes</p>
				</div>
			</div>
		</div>
	);
}

export default BoxLikeItem;