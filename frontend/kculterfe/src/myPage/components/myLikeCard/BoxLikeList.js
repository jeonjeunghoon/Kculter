import React from 'react';
import { Row } from 'react-bootstrap';
import BoxLikeItem from './BoxLikeItem';
import items from '../../data/myLikeList.json'

function BoxCardList() {
	return (
		<>
			<Row className="mx-5">
				{ items.map((item, index) => <BoxLikeItem key={index} props={item} {...item} />)}
			</Row>
		</>
	)
}

export default BoxCardList;
