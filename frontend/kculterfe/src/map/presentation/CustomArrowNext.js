import React from 'react';

function CustomArrowNext(props) {
	return (
		props.sliderRef &&
		props.sliderRef.current &&
		props.sliderRef.current.slickNext &&
		<button className='arrow'
			onClick={props.sliderRef.current.slickNext}
		>
			<img
				src={"http://cdn.onlinewebfonts.com/svg/img_92254.png"}
				alt={"next arrow"}
			/>
		</button>
	);
}

export default CustomArrowNext;