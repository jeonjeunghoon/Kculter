import React from 'react';
import "../../styles/LikeListPage.css"

function BoxLikeItem({ props }) {
	return (
		<div id="card-container">
			<div className="image-container">
				<img src={props.fileUrl} />
				<div className="image-title"><h3>{props.name}</h3></div>
			</div>
			<div className="card-content">
				<div className="like-num">
					<img src={props.fileUrl} />
					<p>likeImg<br></br>Likes</p>
				</div>
				<div className="spot-num">
					<img src={props.file} />
					<p>spotNum<br></br>Likes</p>
				</div>
			</div>
		</div>
	);
}

export default BoxLikeItem;