import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './MapPage.css';

const CurrentMarker = props => {
	return (
		<div className='current-marker'/>
	);
}

const Marker = props => {
	const markerProps = {
		key: props.key, // 키 ex: BTS
		locate: props.locate, // 위치 ex: 광화문
		text: props.text, // 위치 정보 ex: BTS is World Class
		center: [props.lat, props.lng], // 위치 좌표 ex: 33.91 127.12
		src: props.src, // 마커 이미지
	};
	const [isMarkerOn, setIsMarkerOn] = useState(false); // 토글 기능

	return (
		<button className='marker'
			onClick={(e) => {
				e.preventDefault();
				isMarkerOn === false ? setIsMarkerOn(true) : setIsMarkerOn(false);
			}}
		>
			<img className='marker-img'
				src={markerProps.src}
				alt='idol-logo' />
		</button>
	);
}

function GoogleMapApi(props) {
	// GoogleMap을 사용하기 위한 api키
	const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
	
	// 내 위치 담을거
	const defaultProps = {
		center: props.center,
		zoom: props.zoom
	};
	return (
	  // Important! Always set the container height explicitly
	  <div style={{ height: '100%', width: '100%' }}>
		<GoogleMapReact
		  bootstrapURLKeys={{ key: `${apiKey}` }}
		  defaultCenter={defaultProps.center}
		  defaultZoom={defaultProps.zoom}
		  yesIWantToUseGoogleMapApiInternals
		>
		<CurrentMarker
			lat={defaultProps.center.lat}
			lng={defaultProps.center.lng}
		/>
		<Marker
			key={'BTS'}
			locate={'광화문'}
			text={'BTS is World Class!'}
			lat={37.5758772}
			lng={126.9768121}
			src={'https://lh3.googleusercontent.com/-FzskTh6S9uI/YbVqhdkz-NI/AAAAAAAABhY/H7HgifUO4gsk8vHrXW6OG2uV72F1c47vACNcBGAsYHQ/s1600/1639279211589306-0.png'}
		/>
		<Marker
			key={'BlackPink'}
			locate={'경복궁'}
			text={'BlackPink is World Class!'}
			lat={37.579617}
			lng={126.977041}
			src={'https://tl.vhv.rs/dpng/s/493-4931814_blackpink-blink-jisoo-jenny-lisa-rose-kpop-stickers.png'}
		/>
		</GoogleMapReact>
	  </div>
	);
}

export default GoogleMapApi;