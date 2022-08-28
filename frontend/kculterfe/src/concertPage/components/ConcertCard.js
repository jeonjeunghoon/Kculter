import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './concertCard.css';

function CardItem(item) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<>
			<a className='cardLink' onClick={handleShow}>
				<div className="card-container">
					<div className="image-container">
						<img src={item.img} />
						<div className="image-title"><h3>{item.title}</h3></div>
					</div>
					<div className="card-content">
						<div className="like-num">
							<img src='heart.png' />
							<p> Likes</p>
						</div>
					</div>
				</div>
			</a>

			<Modal show={show} onHide={handleClose} size="xl">
				<Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="concert_modal_body">
					<div className='concert_modal_body_l'>
					<img className='modal_concert_img' src={item.img} width={300} height={400}/>
					</div>
					<div className='concert_modal_body_r'>
						<h1>{item.title}</h1>
						<p>{item.startDate}</p>
						<p>{item.endDate}</p>
						<p>{item.lng}</p>
						<p>{item.lat}</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CardItem;