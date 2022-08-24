import React from 'react';

function CustomArrowPrev(props) {
	return (
		props.sliderRef &&
		props.sliderRef.current &&
		props.sliderRef.current.slickPrev &&
		<button className='arrow'
			onClick={props.sliderRef.current.slickPrev}
		>
			<img
				src={"http://cdn.onlinewebfonts.com/svg/img_92254.png"}
				alt={"prev arrow"}
				style={{
					transform: "scaleX(-1)",
				}}
			/>
		</button>
	);
}

export default CustomArrowPrev;