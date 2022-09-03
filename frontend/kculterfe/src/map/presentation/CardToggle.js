import React from 'react';

function CardToggle(props) {
	return (
		<div className="card-toggle">
			<button className='stay-toggle'
				style={{
					backgroundColor:"red",
				}}
				onClick={() => {
					props.setNear(prev => ({
						...prev,
						isStay: true,
					}));
				}}
			>
			</button>
			<button className='tour-toggle'
				onClick={() => {
					props.setNear(prev => ({
						...prev,
						isStay: false,
					}));
				}}
			>
			</button>
		</div>
	);
}

export default CardToggle;