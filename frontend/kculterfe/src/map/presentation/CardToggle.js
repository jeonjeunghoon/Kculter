import React from 'react';

function CardToggle(props) {
	return (
		<div className="card-toggle">
			<button className='stay-toggle'
				style={{
					backgroundColor:"red",
				}}
				onClick={() => props.setIsStay(() => true)}
			>
			</button>
			<button className='tour-toggle'
				onClick={() => props.setIsStay(() => false)}
			>
			</button>
		</div>
	);
}

export default CardToggle;