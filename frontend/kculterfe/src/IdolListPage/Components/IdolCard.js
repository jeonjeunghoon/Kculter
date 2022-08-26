import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
	Link
} from 'react-router-dom';
import MapPage from '../../map/MapPage.js';
import './IdolCard.css';

function IdolCard( {key, type, path_photo, title, num_like, num_spot, path_map, explain}) {
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
						<div className="spot-num">
							<img src='spot.png' />
							<p>{num_spot} Spots</p>
						</div>
					</div>
				</div>
			</a>

			<Modal 
				show={show}
				onHide={handleClose}
				size="lg"
			>
				<Modal.Header className="idolcard-modal-header">
					<img src={path_photo} />
					<Modal.Title className="idolcard-modal-title">{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="idolcard-modal-body">
					<div className="idolcard-modal-paragraph">
						<p>{explain}</p>
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

					<div className="idolcard-modal-map">

					</div>

				</Modal.Body>
				<Modal.Footer>
				<Button variant="idolcard-secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="idolcard-primary" onClick={handleClose}>
					<Link to='../../map/MapPage.js' render={() => <MapPage key={key} type={type} title={title.toLocaleUppercase()} />}>
						Find {title} Spots in Map
                    </Link>
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default IdolCard