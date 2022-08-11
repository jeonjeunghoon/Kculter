import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './IdolCard.css';

import blackpinkpimg from '../Data/photo/blackpink.jpg'
import btsimg from '../Data/photo/bts.jpg'
import psyimg from '../Data/photo/psy.png'
import twiceimg from '../Data/photo/twice.jpg'

function IdolCard( {id, key, path_photo, title, num_like, num_spot, path_map}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<a className='cardLink' onClick={handleShow}>
				<div className="card-container">
					<div className="image-container">
						<img src={path_photo} />
						<div className="image-title"><h3>{title}</h3></div>
					</div>
					<div className="card-content">
						<div className="like-num">
							<img src='heart.png' />
							<p>{num_like}<br></br>Likes</p>
						</div>
						<div className="spot-num">
							<img src='spot.png' />
							<p>{num_spot}<br></br>Spots</p>
						</div>
					</div>
				</div>
			</a>

			<Modal 
				show={show}
				onHide={handleClose}
				size="lg"
			>
				<Modal.Header closeButton className="idolcard-modal-header">
					<img src={path_photo} />
					<Modal.Title className="idolcard-modal-title">{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="idolcard-modal-body">
					<div className="idolcard-modal-paragraph">
						<p>BTS, also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in 2013 under Big Hit Entertainment.[5] The septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their own output.</p>
					</div>
					<div className="idolcard-modal-info">
						<div className="idolcard-modal-like-num">
							<img src='heart.png' />
							<p>{num_like} Likes</p>
						</div>
						<div className="idolcard-modal-spot-num">
							<img src='spot.png' />
							<p>{num_spot} Spots</p>
						</div>					
					</div>

				</Modal.Body>
				<Modal.Footer>
				<Button variant="idolcard-secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="idolcard-primary" onClick={handleClose}>
					Find BTS Spots
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default IdolCard