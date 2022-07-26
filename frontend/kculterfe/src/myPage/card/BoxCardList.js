import React from 'react';
import BoxCardItem from './BoxCardItem';
import items from '../data/card.json'
import { Row, Col } from 'react-bootstrap';

function BoxCardList() {
	return (
		<>
			{ items.map((item, index) => <BoxCardItem key={index} props={item} {...item} />)}
		</>
	)
}

export default BoxCardList;
