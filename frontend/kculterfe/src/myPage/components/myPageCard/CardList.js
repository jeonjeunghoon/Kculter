import React from 'react';
import CardItem from './CardItem';

function CardList({ props }) {
	return (
		<div className="cardList">
			{ props.map((course, index) => <CardItem key={index} props={course} {...course} />)}
		</div>
	)
}

export default CardList;
