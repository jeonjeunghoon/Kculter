import React, {
	useRef,
} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardToggle from './CardToggle';
import Cards from './Cards';
import CustomArrowPrev from './CustomArrowPrev';
import CustomArrowNext from './CustomArrowNext';

function MapCard(props) {
	const settings = {
		dots: false,
		infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}
		],
	}
	const sliderRef = useRef();

	if (props.near && props.near.data) {
		if (props.near.data.length < settings.slidesToShow) {
			settings.slidesToShow = props.near.length;
		}
		settings.responsive.map((item) => {
			if (props.near.data.length < item.settings.slidesToShow) {
				item.settings.slidesToShow = props.near.data.length;
			}
		})
	}

	return (
		props.near
		?
		<div className='stay-container'>
			<CardToggle
				setIsStay={props.setIsStay}
			/>

			<CustomArrowPrev
				sliderRef={sliderRef}
			/>

			<Slider className="stay-box"
				ref={sliderRef}
				{ ...settings }
			>
				{props.near &&
				props.near.data &&
				props.near.data.map((item, index) => 
					<Cards
						key={index}
						item={item}
						setCenter={props.setCenter}
						setZoom={props.setZoom}
						dispatch={props.dispatch}
					/>
				)}
			</Slider>
			
			<CustomArrowNext
				sliderRef={sliderRef}
			/>
		</div>
		:
		<></>
	);
}

export default MapCard;