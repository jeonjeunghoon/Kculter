import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/MyPage.css"

function CardItem({ props }) {

	const [toMap, setToMap] = useState(false); // 맵 페이지로 이동
	const moveToMap = () => {
		setToMap(true);
	}
	// window.sessionStorage.setItem("keyHash", keyHash);
	// window.sessionStorage.setItem("title", title);
	// window.sessionStorage.setItem("type", type);
	return (
		<>
			<div className="my-5">
				<Card className="body-card">
					{/* 카드 호버 기능 */}
					<Link className="" to='/MapPage'>
						<Card className="body-card-hover" onClick={moveToMap}>
							<div className="square border border-1 rounded-pill m-auto" style={{ color: 'white', width: '6em' }}>
								<span className="px-2" style={{ width: '20px' }}>
									view more
								</span>
							</div>
						</Card>
					</Link>
					{/* 아이돌 카드 */}
					<Card.Img variant="top" className="m-auto" src={ props.fileUrl } style={{ height: '6em', width: '100%' }}/>
					<Card.Body className="body-card-body">
						<Card.Title className="text-center">
							<span style={{ fontSize: '1rem' }}>
								{ props.name }
							</span>
						</Card.Title>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}

export default CardItem;