import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import "../../styles/Card.css"

function CardItem({ props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="my-4">
				<Card className="body-card">
					{/* 카드 호버 기능 */}
					<Card className="body-card-hover text-center" onClick={handleShow}>
						<div className="square border border-1 rounded-pill m-auto" style={{ color: 'white', width: '6em'}}>
							<span className="px-2" style={{ width: '20px'}}>
								view more
							</span>
						</div>
					</Card>
					{/* 아이돌 카드 */}
					<Card.Img variant="top" src={ props.img } style={{ height: '6em' }}/>
					<Card.Body className="body-card-body">
						<Card.Title className="text-center">
							{ props.title }
						</Card.Title>
					</Card.Body>
				</Card>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img width="200" height="300" src={props.img}></img>
					{props.title}
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