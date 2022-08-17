import React from 'react';

const SideNav = () => {
	return (
		<nav className="side-nav">
			<div className="idol">
				<img
					src="https://lh3.googleusercontent.com/-FzskTh6S9uI/YbVqhdkz-NI/AAAAAAAABhY/H7HgifUO4gsk8vHrXW6OG2uV72F1c47vACNcBGAsYHQ/s1600/1639279211589306-0.png"
					alt="BTS"
				/>
				<p>BTS</p>
			</div>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaITc6o0LgRVrKPNR6H8iyDsPfgzcJ9IH6A&usqp=CAU"
				alt="Gyeongbokgung"
			/>
			<div className="location">
				Gyeongbokgung
				Culture landmark
			</div>
			<div className="뭐지">
				<div className="favorite">
					Favorite
				</div>
				<div className="description">
					Description +
				</div>
			</div>
			<div className="info">
				story

				info info info info info info info info info info info 
			</div>
			<div className="photos">
				Photos child
			</div>
			<div className="delete">
				delete button
			</div>
			<div className="course">
				courses child
				Make your own course
			</div>
			<div className="add">
				add button
			</div>
		</nav>
	);
}

export default SideNav;