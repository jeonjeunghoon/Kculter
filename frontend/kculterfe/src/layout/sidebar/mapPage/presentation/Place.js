import React from 'react';

function Place({ name, address, explain }) {
	return (
		<div className="place">
			<div className="title">
				<h5>{name}</h5>
				<p>{address}</p>
			</div>
			<div className="story-container">
				{
					explain &&
					<div className="story-content">
						<h6>story</h6>
						<p>{explain}</p>
					</div>
				}
			</div>
		</div>
	);
}

export default Place;