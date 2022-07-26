import React from 'react';
import './IdolList.css';
import IdolCard from './IdolCard.js';
import items from '../Data/idolcard.json';

function IdolList({}) {
	return (
		<div className="CardContainer">
			{ items.map((item, index) => <div className="CardDiv"><IdolCard key={index} item={item} /></div>) }
		</div>
	)
}

export default IdolList