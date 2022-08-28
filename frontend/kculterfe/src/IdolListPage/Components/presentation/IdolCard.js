import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
	Link
} from 'react-router-dom';
// css module
import styles from './IdolCard.module.css';
// redux
import {
	useDispatch
} from 'react-redux';
import { SET_IDOL_CULTURE } from '../../../redux/reducer';

function IdolCard( {keyNum, type, path_photo, title, num_like, num_spot, path_map, explain}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();
	dispatch({
		type: SET_IDOL_CULTURE,
		data: {
			key: keyNum,
			type: type,
			title: title,
		}
	});

	return (
		<>
			<a className={styles.cardLink} onClick={handleShow}>
				<div className={styles.card_container}>
					<div className={styles.image_container}>
						<img src={path_photo} />
					</div>
					<div className={styles.card_content}>
						<div className={styles.image_title}>
							<h3>{title}</h3>
						</div>
						<div className={styles.pin}>
							<div className={styles.like_num}>
								<p>{num_like }</p>
								<p>likes</p>
								<img src='heart.png' />
							</div>
							<div className={styles.spot_num}>
								<p>{num_spot }</p>
								<p>spots</p>
								<img src='spot.png' />
							</div>
						</div>
					</div>
				</div>
			</a>

			<Modal 
				className={styles.modal}
				show={show}
				onHide={handleClose}
				size="sm"
			>
				<Modal.Header className={styles.modal_header}>
					<img src={path_photo} />
				</Modal.Header>
				<Modal.Body className={styles.modal_body}>
					<div className={styles.modal_title}>
						{title}
					</div>
					<div className={styles.modal_paragraph}>
						<p>{explain}</p>
					</div>
					<div className={styles.modal_info}>
						<div className={styles.modal_like_num}>
							<img src='heart.png' />
							<p>{num_like} Likes</p>
						</div>
						<div className={styles.modal_spot_num}>
							<img src='spot.png' />
							<p>{num_spot} Spots</p>
						</div>
					</div>
					<div className={styles.modal_map}>

					</div>

				</Modal.Body>
				<Modal.Footer>
				<Button variant={styles.modal_secondary} onClick={handleClose}>
					Close
				</Button>
				<Button variant={styles.modal_primary} onClick={handleClose}>
					<Link className={styles.button} to='/MapPage'>
						Find {title} Spots in Map
                    </Link>
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default IdolCard