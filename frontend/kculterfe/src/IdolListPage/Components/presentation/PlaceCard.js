/** 이 파일은 이제 사용하지 않습니다. This file is obsolete */

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
	Link
} from 'react-router-dom';
import MapPage from '../../map/MapPage.js';
import './PlaceCard.css';

function PlaceCard( {id, key, culture_type, path_photo, title, num_like, lat, lng, address, explain}) {
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
							<p>{num_like} Likes</p>
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
						<h3>{address}</h3>
						<p>{explain}</p>
					</div>
					<div className="idolcard-modal-info">
						<div className="idolcard-modal-like-num">
							<img src='heart.png' />
							<p>{num_like} Likes</p>
						</div>
						<div className="idol-card-modal-address">
							<p>{address}</p>
						</div>
					</div>

					<div className="idolcard-modal-map">

					</div>

				</Modal.Body>
				<Modal.Footer>
				<Button variant="idolcard-secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="idolcard-primary" onClick={handleClose}>
					<Link to='/MapPage' render={() => <MapPage key={key} title={title.toLocaleUpperCase()} culture_type={culture_type} />}>
                        Find {title} in Map
                    </Link>
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default PlaceCard