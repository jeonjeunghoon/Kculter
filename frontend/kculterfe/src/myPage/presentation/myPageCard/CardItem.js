import React, {useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CLICK_PLACE } from '../../../redux/reducer';
import "../../styles/MyPage.css"
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function CardItem({ props, index, end }) {

	const dispatch = useDispatch();
	const [displayFlag, setDisplayFlag] = useState(true);
	if ((index + 1) == end) {
		useEffect(() => {
			setDisplayFlag(false);
		})
	}


    const moveToMap = () => {
        let place = props
		
        dispatch({
            type: CLICK_PLACE,
            data: place
        })
    }

	return (
		<>
			<CardDiv>
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
				<PathDesignCircle>
					<NumText DesignNum={index}>{index}</NumText>
					<PathDesignLine check={displayFlag} />
				</PathDesignCircle>
			</CardDiv>
		</>
	);
}

// css

const NumText = styled.span`
	color: white;
	font-weight: 700;
	margin-top: 0;
	background-color: #f4029b;
	border-radius: 50%;
	padding: 1px 5.3px;
	// ${props => {
    //     if (props.DesignNum === 0) {
    //         return`
	// 			margin-left: 143.5px;
    //         `
    //     }
	// 	else if (props.DesignNum === 1) {
	// 		return `
	// 			margin-left: 145.5px;
	// 		`
	// 	}
    //     else {
    //         return`
    //         	margin-left: 144.5px;
    //         `
    // }
    }};
`

const PathDesignCircle = styled.div`
	color: #3172F6;
	font-size: 1.2rem;
	font-weight: 900;
	position: relative;
	margin-left: 148px;
	margin-top: 10px;
`
	
	const PathDesignLine = styled.hr`
	display: ${props => props.check ? 'true' : 'none'};
	position: absolute;
	border: 2px solid #3172F6;
	width: 233px;
	margin: 13.9px 11.2px;
	top: 0;
	opacity: 1;
	
`

const CardDiv = styled.div`
	margin-top: 40px;
`

export default CardItem;