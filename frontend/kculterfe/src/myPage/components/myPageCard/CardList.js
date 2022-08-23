import React from 'react';
import CardItem from './CardItem';

function CardList({ props, data }) {
	return (
		<>
			<div className="cardList">
				{ data.map((course, index) => <CardItem key={index} props={course} {...course} />)}
			</div>
		</>
	)
}

export default CardList;
