import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./Card.css"

function CardItem({ props }) {
	return (
		<>
			<Col className="py-5">
				<Card className="body-card">
					<Card.Img variant="top" src={ props.img } style={{ height: '6em' }}/>
					<Card.Body className="body-card-body">
						<Card.Title className="text-center">
							{ props.title }
						</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default CardItem;