import React from 'react'
import './Card.css'

function Card({title, imageUrl, like_num, spot_num}) {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={imageUrl} />
				<div className="image-title"><h3>{title}</h3></div>
			</div>
			<div className="card-content">
				<div className="like-num">
					<img src='heart.png' />
					<p>{like_num}<br></br>Likes</p>
				</div>
				<div className="spot-num">
					<img src='spot.png' />
					<p>{spot_num}<br></br>Likes</p>
				</div>
			</div>
		</div>
	)
}

export default Card