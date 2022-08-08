import React from 'react';
import BoxCardItem from './BoxCardItem';
import items from '../../data/myMap.json'

function BoxCardList() {
	return (
		<div>
			{ items.map((item, index) => <BoxCardItem key={index} props={item} {...item} />)}
		</div>
	)
}

export default BoxCardList;
