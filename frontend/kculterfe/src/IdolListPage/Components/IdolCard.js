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
							<p>{item.spotnum}<br></br>Spots</p>
						</div>
					</div>
				</div>
			</a>

			<Modal 
				show={show}
				onHide={handleClose}
				size="lg"
			>
				<Modal.Header closeButton className="modal-header">
					<img src={blackpinkpimg} />
					<Modal.Title className="modal-title">{item.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modal-body">
					<div className="modal-paragraph">
						<p>BTS, also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in 2013 under Big Hit Entertainment.[5] The septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their own output.</p>
					</div>
					<div className="modal-info">
						<div className="modal-like-num">
							<img src='heart.png' />
							<p>{item.likenum} Likes</p>
						</div>
						<div className="modal-spot-num">
							<img src='spot.png' />
							<p>{item.spotnum} Spots</p>
						</div>					
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
	)
}

export default IdolCard