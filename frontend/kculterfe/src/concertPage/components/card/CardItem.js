import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import Jeju from '../../jeju.jpg';


function CardItem({item}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<a className='cardLink' onClick={handleShow}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={Jeju} />
					<Card.Body>
						<Card.Title>{item.title}</Card.Title>
						<Card.Text>
							{item.date}
						</Card.Text>
						<Button variant="primary" href={item.path}>Go somewhere</Button>
					</Card.Body>
				</Card>
			</a>

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