import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBox from './SearchBox';
import Dotenv from 'dotenv';
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

function GoogleMapApi(props) {
	// GoogleMap을 사용하기 위한 api키
	Dotenv.config();
	const bootProps = {
		apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: props.language,
		region: props.region,
	}
	
	// 내 위치 담을거
	const defaultProps = {
		center: props.center,
		zoom: props.zoom
	};

	//
	const [apiReady, setApiReady] = useState(false);
	const [map, setMap] = useState(null);
	const [googlemaps, setGooglemaps] = useState(null);

	// 화면 크기에 따른 줌 설정
	if (window.screen.width >= 768) {
		defaultProps.zoom = 15;
	}

	const apiIsLoaded = (map, maps) => {
		// map과 maps 개체가 로드되었다면 각각의 state 값에 넣어준다.
		if (map && maps) {
			setApiReady(true);
			setMap(map);
			setGooglemaps(maps);
		}
	}

	return (
	  // Important! Always set the container height explicitly
	  <div style={{ height: '100%', width: '100%' }}>
		{apiReady && googlemaps && 
			<SearchBox
				map={map}
				mapApi={googlemaps}
			/>
		}
		<GoogleMapReact
			bootstrapURLKeys={{
				key: bootProps.apiKey,
				language: bootProps.language,
				region: bootProps.region,
				libraries: 'places',
			}}
		  defaultCenter={defaultProps.center}
		  defaultZoom={defaultProps.zoom}

		// map, maps 개체에 접근하기 위해 반드시 true로 설정해야 한다.
		  yesIWantToUseGoogleMapApiInternals
		// map은 지도 객체, maps에는 api object가 들어있다.
		onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
		>

		{/* Marker 컴포넌트 */}
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