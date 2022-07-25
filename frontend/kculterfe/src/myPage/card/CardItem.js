import React, { Component }  from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
// import Jeju from '../../jeju.jpg';

function CardItem({ props }) {
	return (
		<>
			<Row className="mx-5">
				<Col className="py-5">
					<Card className="body-card">
						<Card.Img variant="top" src={ props.img } style={{ height: '6em' }}/>
						<Card.Body className="body-card-body">
							<Card.Title className="text-center">
								{ props.place }
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}

export default CardItem;