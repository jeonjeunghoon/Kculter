import React from 'react';
import { Card } from 'react-bootstrap';
import "../../styles/Card.css"

function CardItem({ props }) {
	return (
		<>
			<div className="mx-1 my-5">
				<Card className="body-card">
					<Card.Img variant="top" src={ props.img } style={{ height: '6em' }}/>
					<Card.Body className="body-card-body">
						<Card.Title className="text-center">
							{ props.title }
						</Card.Title>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}

export default CardItem;