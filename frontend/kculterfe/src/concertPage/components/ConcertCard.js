import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ConcertCard.css';
import './ConcertCardContent.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MAP_IN_CONCERT } from '../../redux/reducer';

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

			<Modal show={show} onHide={handleClose} size="lg">
				{/* <Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className="concert_modal_body">
					<div className='concert_modal_body_l'>
						<img className='modal_concert_img' src={item.img}/>
					</div>
					<div className='concert_modal_body_r'>
						<div className='body_r_start'>
							<div className='concert_closebtn'>
								<i class="bi bi-x" onClick={handleClose}></i>
							</div>
							<h1>{item.title}</h1>
							<div className='concert_date'>concert date: {item.startDate.split('T')[0]} ~ {item.endDate.split('T')[0]}</div>
							<div className='concert_explain'>{item.explain}</div>
						</div>
						<div className='body_r_end'>
							<Link to="/MapPage">
            	       <button onClick={() => {
											dispatch({
												type: MAP_IN_CONCERT,
												data: {
													keyHash: item.starHash,
													concertName: item.title,
													starName: item.starName,
													img: item.img,
													explain: item.explain,
													lat: item.lat,
													lng: item.lng,
												}
											})
										 }}>
											go to map
										 </button>
            	</Link>
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