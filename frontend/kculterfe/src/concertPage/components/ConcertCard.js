import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ConcertCard.css';
import contentStyles from './ConcertCardContent.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MAP_IN_CONCERT } from '../../redux/reducer';
import '../../index.css';

function CardItem(item) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const dispatch = useDispatch();
	
	return (
		<>
			<a className='cardLink' onClick={handleShow}>
				<div className="card-container">
					<div className="image-container">
						<img src={item.img} />
					</div>
					<div className="card-content">
						<h6 className='card-title'>
							{item.title}
						</h6>
						<div className="card-date">
							{item.startDate.split('T')[0]} ~ {item.endDate.split('T')[0]}
						</div>
					</div>
				</div>
			</a>

			<Modal show={show} onHide={handleClose} size="lg" className={contentStyles.modal}>
				{/* <Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className={contentStyles.concert_modal_body}>
					<div className={contentStyles.concert_modal_body_l}>
						<img className={contentStyles.modal_concert_img} src={item.img}/>
					</div>
					<div className={contentStyles.concert_modal_body_r}>
						<div className={contentStyles.body_r_start}>
							{/* <div className='concert_closebtn'>
								<i class="bi bi-x" onClick={handleClose}></i>
							</div> */}
							<h2 className={contentStyles.card_item_title}>{item.title}</h2>
							<p></p>
								<div className={contentStyles.concert_date}>concert date: {item.startDate.split('T')[0]} ~ {item.endDate.split('T')[0]}</div>
							<div className={contentStyles.concert_explain}>{item.explain}</div>
						</div>
						<div className={contentStyles.body_r_end}>
							<div className={contentStyles.body_r_end_l}>
								<div className={contentStyles.reserve_btn}>
									<Button href={item.buySite} target='_blank'>go to reserve</Button>
								</div>
								<div className={contentStyles.map_btn}>
									<Link to="/MapPage">
										<Button onClick={() => {
																dispatch({
																	type: MAP_IN_CONCERT,
																	data: {
																		keyHash: item.starHash,
																		lat: item.lat,
																		lng: item.lng,
																	}
																})
															}}>
																go to map
										</Button>
									</Link>
								</div>
							</div>
							<div className={contentStyles.close_btn}>
								<Button onClick={handleClose}>Close</Button>
							</div>
						</div>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer> */}
			</Modal>
		</>
	);
}

export default CardItem;