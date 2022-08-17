import React from 'react';
import CardItem from './CardItem';
import items from '../data/card.json';

function CardList() {
	return (
		<div className='cardList'>
			{ items.map((item, index) => <CardItem key={index} item={items} {...item} />)}
		</div>
	)
}

export default CardList;