import React, { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Jeju from '../../jeju.jpg';
import './concertCard.css';

function CardItem(item) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Card className='concertCard' style={{ width: '20rem', height: '22rem'}} onClick={handleShow}>
				<Card.Img variant="top" src={Jeju} style={{height: '15rem'}}/>
				<Card.Body>
					<Container>
						<Row>
							<Card.Title>{item.title}</Card.Title>
						</Row>
						<Row>
							<Col>
								<Card.Text>{item.date}</Card.Text>
							</Col>
								<div className='conertLikeBtn'></div>
							<Col>
							</Col>
						</Row>
						
					</Container>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img width="200" height="300" src={Jeju}></img>
					{item.date}
				</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CardItem;