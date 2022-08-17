import React from 'react';
import BoxCardItem from './BoxCardItem';
import items from '../../data/myPage.json'

function BoxCardList() {
	return (
		<div className="boxList">
			{ items.map((item, index) => <BoxCardItem key={index} props={item} {...item} />)}
		</div>
	)
}

export default BoxCardList;
