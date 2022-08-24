import React, {
	useState,
	useEffect,
} from 'react';
import Cards from './Cards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MapCard(props) {
	const [nearData, setNearData] = useState(null);
	const settings = {
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5
	}

	useEffect(() => {
		if (props.near) {
			setNearData(props.near.data);
		}
	}, [props.near])
	return (
		nearData
		?
		<div className='stay-container'>
			<Slider className='stay-box'
				{ ...settings }
			>
				{nearData.map((item, index) => 
					<Cards
						key={index}
						item={item}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
				)}
			</Slider>
		</div>
		:
		<></>
	);
}

export default MapCard;