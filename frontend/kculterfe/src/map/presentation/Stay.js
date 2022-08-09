import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function StayCard({ key, item, setCenter }) {
	const props = {
		key: key,
		title: item.title,
		img: 'https://kculter-image.s3.ap-northeast-2.amazonaws.com/default-image.jpg',
		pos: {
			lat: Number(item.lat),
			lng: Number(item.lng)
		},
	}

	if (item.representImg) {
		props.img = item.representImg;
	} else if (item.sumnail) {
		props.img = item.sumnail;
	}

	return (
		<div className="stay-card">
			<button
				onClick={() => {
					alert(item.title)
					setCenter(props.pos);
				}}
			>
				<img
					src={props.img}
					alt='Stay image'
				/>
			</button>
			<p>{props.title}</p>
		</div>
	);
}

function Stay({ stayData, setCenter }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	}

	return (
		stayData
			?
				<div className='stay-container'>
					<Slider className='stay-box'
						{ ...settings }
					>
						{stayData.map((item) => 
							<StayCard
								key={Number(item.lat) + Number(item.lng)}
								item={item}
								setCenter={setCenter}
							/>
						)}
					</Slider>
				</div>
			:
				<></>
	);
}

export default Stay;