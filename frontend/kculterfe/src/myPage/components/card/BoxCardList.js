import React from 'react';
import BoxCardItem from './BoxCardItem';
import items from '../../data/card.json'

function BoxCardList() {
	return (
		<>
			{ items.map((item, index) => <BoxCardItem key={index} props={item} {...item} />)}
		</>
	)
}

export default BoxCardList;
