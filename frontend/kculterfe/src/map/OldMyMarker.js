import React, { useState } from 'react';

function MyMarker(props) {
	const markerProps = {
		key: props.key, // 키 ex: BTS
		locate: props.locate, // 위치 ex: 광화문
		text: props.text, // 위치 정보 ex: BTS is World Class
		center: [props.lat, props.lng], // 위치 좌표 ex: 33.91 127.12
		src: props.src, // 마커 이미지
	};
	const [isMarkerOn, setIsMarkerOn] = useState(false); // 토글

	return (
		<button className='marker'
			onClick={(e) => {
				e.preventDefault();
				isMarkerOn === false ? setIsMarkerOn(true) : setIsMarkerOn(false);
			}}
		>
			<img className='marker-img'
				src={markerProps.src}
				alt='idol-logo'
			/>
		</button>
	);
}

export default MyMarker;