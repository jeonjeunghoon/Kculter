import React from 'react';
import CardItem from './CardItem';

function CardList({ props }) {
	return (
		<>
			<div className="cardList">
				{ props.map((item, index) => <CardItem key={index} props={item} {...item} />)}
			</div>
		</>
	)
}

export default CardList;
