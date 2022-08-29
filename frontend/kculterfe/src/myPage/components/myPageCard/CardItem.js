import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import "../../styles/MyPage.css"

function CardItem({ props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="my-5">
				<Card className="body-card">
					{/* 카드 호버 기능 */}
					<Card className="body-card-hover" onClick={handleShow}>
						<div className="square border border-1 rounded-pill m-auto" style={{ color: 'white', width: '6em' }}>
							<span className="px-2" style={{ width: '20px' }}>
								view more
							</span>
						</div>
					</Card>
					{/* 아이돌 카드 */}
					<Card.Img variant="top" className="m-auto" src={ props.fileUrl } style={{ height: '6em', width: '100%' }}/>
					<Card.Body className="body-card-body">
						<Card.Title className="text-center">
							<span style={{fontSize: '1rem'}}>
								{ props.name }
							</span>
						</Card.Title>
					</Card.Body>
				</Card>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>{props.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img width="200" height="300" src={props.fileUrl}></img>
					{props.name}
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