import React from 'react';
import CardItem from './CardItem';
import items from '../data/card.json';

function CardList() {
	return (
		<div>
			{ items.map((item, index) => <CardItem key={index} items={item} {...item} />)}
		</div>
	)
}

export default CardList;