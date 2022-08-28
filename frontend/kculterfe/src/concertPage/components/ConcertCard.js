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

			<Modal show={show} onHide={handleClose} size="xl">
				{/* <Modal.Header closeButton>
				<Modal.Title>{item.title}</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className="concert_modal_body">
					<div className='concert_modal_body_l'>
						<img className='modal_concert_img' src={item.img}/>
					</div>
					<div className='concert_modal_body_r'>
						<div className='concert_closebtn'>
							<i class="bi bi-x" onClick={handleClose}></i>
						</div>
						<h1>{item.title}</h1>
						<div className='concert_date'>concert date: {item.startDate.split('T')[0]} ~ {item.endDate.split('T')[0]}</div>
						<div className='concert_explain'>{item.explain}</div>
						<p>{item.lng}</p>
						<p>{item.lat}</p>
							<Link to="/MapPage">
            	       <button onClick={() => {
											console.log(item);
											dispatch({
												type: MAP_IN_CONCERT,
												data: {
													key: item.starKey,
													name: item.title,
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