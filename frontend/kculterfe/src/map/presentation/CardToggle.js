import React from 'react';
import kpop from '../../src_asset/stay_logo.png';

function CardToggle(props) {
	return (
		<div className="card-toggle-container">
			<button className='stay-toggle'
				onClick={() => {
					props.setNear(prev => ({
						...prev,
						isStay: true,
					}));
				}}
			>
				<img
					src={kpop}
					alt='filter'
				/>
				<p>
					Stay
				</p>
			</button>
			<button className='tour-toggle'
				onClick={() => {
					props.setNear(prev => ({
						...prev,
						isStay: false,
					}));
				}}
			>
				<img
					src={kpop}
					alt='filter'
				/>
				<p>
					Tour
				</p>
			</button>
		</div>
	);
}

export default CardToggle;