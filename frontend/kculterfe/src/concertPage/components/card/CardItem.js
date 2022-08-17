import React, { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Jeju from '../../jeju.jpg';
import './concertCard.css';

function CardItem(item) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	return (
		<>
			<Card className='concertCard' onClick={handleShow}>
				<Card.Img variant="top" src={Jeju} style={{height: '15rem'}}/>
				<Card.Body>
					<Container>
						<Row>
							<Card.Title className="concertCardTitle">{item.title}</Card.Title>
						</Row>
						<Row>
							<Col>
								<Card.Text>{item.date}</Card.Text>
							</Col>
								<div className='conertLikeBtn'>like</div>
							<Col>
							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose} size="xl">
				<Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="concert_modal_body">
					<div className='concert_modal_body_l'>
					<img className='modal_concert_img' src={Jeju} width={300} height={400}/>
					</div>
					<div className='concert_modal_body_r'>
						<h1>{item.title}</h1>
						<p>{item.date}</p>
						<br/>
						<p>location: asdf</p>
						<img className='map_img' src="https://i.stack.imgur.com/HILmr.png"></img>
					</div>
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