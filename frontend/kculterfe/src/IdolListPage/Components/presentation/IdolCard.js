import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
	Link
} from 'react-router-dom';
import { getPin } from '../container/GetPinData';
// css module
import styles from './IdolCard.module.css';
// fonts
import '../../../index.css';

function IdolCard( {keyHash, type, path_photo, title, num_like, num_spot, explain}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	window.sessionStorage.setItem("keyHash", keyHash);
	window.sessionStorage.setItem("title", title);
	window.sessionStorage.setItem("type", type);

	const [pin, setPin] = useState([]);

	useEffect(() => {
		getPin(type, keyHash)
		.then(resPin => {
			setPin(resPin);
		})
		.catch(err => {
			console.log(err)
		})
	}, []);

	return (
		<>
			<a className={styles.cardLink} onClick={handleShow}>
				<div className={styles.card_container}>
					<div className={styles.image_container}>
						<img src={path_photo} />
						<div className={styles.image_title}>
							<h3>{title}</h3>
						</div>
					</div>
					<div className={styles.card_content}>
						<div className={styles.card_content_pin}>
							<img src={pin.imageUrl} />
						</div>
						<div className={styles.card_content_spot}>
							<p>{num_spot }</p>
							<img src='spot.png' />
						</div>
					</div>
				</div>
			</a>

			<Modal 
				className={styles.modal}
				show={show}
				onHide={handleClose}
			>
				<Modal.Header className={styles.modal_header}>
					<img src={path_photo} />
				</Modal.Header>
				<Modal.Body className={styles.modal_body}>
					<div className={styles.modal_title}>
						{title}
						<img src={pin.imageUrl} />
					</div>
					<div className={styles.modal_info}>
						<div className={styles.modal_spot_num}>
							<img src='spot.png' />
							<p>{num_spot} Spots</p>
						</div>
					</div>
					<div className={styles.modal_paragraph}>
						<p>{explain}</p>
					</div>
					<div className={styles.modal_map}>

					</div>

				</Modal.Body>
				<Modal.Footer>
				<Button variant={styles.modal_secondary} onClick={handleClose}>
					Close
				</Button>
				<Link className={styles.button} to='/MapPage'>
					<Button variant={styles.modal_primary} onClick={handleClose}>
							Find {title} Spots in Map
					</Button>
				</Link>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default IdolCard