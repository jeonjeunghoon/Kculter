import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './MapPage.css';

const Marker = props => {
	const markerProps = {
		key: props.key, // 키 ex: BTS
		locate: props.locate, // 위치 ex: 광화문
		text: props.text, // 위치 정보 ex: BTS is World Class
		center: [props.lat, props.lng], // 위치 좌표 ex: 33.91 127.12
		src: 'url(' + props.src + ')', // 마커 이미지
	};
	const [isMarkerOn, setIsMarkerOn] = useState(false); // 토글 기능

	return (
		<button className='marker'
			style={{backgroundImage: markerProps.src}}
			onClick={(e) => {
				e.preventDefault();

				// togle 기능
				isMarkerOn === false ? setIsMarkerOn(true) : setIsMarkerOn(false);
			}}
		/>
	);
}

function GoogleMap(props) {
	// GoogleMap을 사용하기 위한 api키
	const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
	
	// 내 위치 담을거
	const defaultProps = {
		center: props.center,
		zoom: 15,
	};

	return (
	  // Important! Always set the container height explicitly
	  <div style={{ height: '100vh', width: '100vw' }}>
		<GoogleMapReact
		  bootstrapURLKeys={{ key: `${apiKey}` }}
		  defaultCenter={defaultProps.center}
		  defaultZoom={defaultProps.zoom}
		  yesIWantToUseGoogleMapApiInternals
		>
		<Marker
			key={'Current'}
			locate={'내 위치'}
			text={'내 위치다'}
			lat={defaultProps.center.lat}
			lng={defaultProps.center.lng}
			src={'https://toppng.com/uploads/preview/related-wallpapers-sky-blue-dot-11563201472gexfknmfyt.png'}
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

export default GoogleMap;