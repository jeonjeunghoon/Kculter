import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './IdolCard.css';

import blackpinkpimg from '../Data/photo/blackpink.jpg'
import btsimg from '../Data/photo/bts.jpg'
import psyimg from '../Data/photo/psy.png'
import twiceimg from '../Data/photo/twice.jpg'

function IdolCard({item}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const imgurl = item.imgurl;
	return (
		<>
			<a className='cardLink' onClick={handleShow}>
				<div className="card-container">
					<div className="image-container">
						<img src={blackpinkpimg} />
						<div className="image-title"><h3>{item.title}</h3></div>
					</div>
					<div className="card-content">
						<div className="like-num">
							<img src='heart.png' />
							<p>{item.likenum}<br></br>Likes</p>
						</div>
						<div className="spot-num">
							<img src='spot.png' />
							<p>{item.spotnum}<br></br>Likes</p>
						</div>
					</div>
				</div>
			</a>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{item.likenum} likes
					{item.spotnum} spots
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
	)
}

export default IdolCard