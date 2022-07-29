import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Dotenv from 'dotenv';

import './MapPage.css';
import SearchBox from './SearchBox';
import Filter from './Filter';

import MyMarker from './MyMarker';
import CurrentMarker from './CurrentMarker';

function GoogleMapApi(props) {
	Dotenv.config();
	const defaultProps = {
		// GoogleMap을 사용하기 위한 api키
		apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: props.language,
		region: props.region,
		center: props.center,
		zoom: props.zoom
	};

	// Search Box를 위한 값들
	const [apiReady, setApiReady] = useState(false);
	const [map, setMap] = useState(null);
	const [googlemaps, setGooglemaps] = useState(null);

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
		<div className='map-render'>

			{/* Search Bar 컴포넌트 */}
			<div className='search-bar'>
				{/* Search Box 컴포넌트 */}
				{apiReady && googlemaps && 
					<SearchBox
						map={map}
						mapApi={googlemaps}
					/>
				}
				{/* filter 컴포넌트 */}
				<Filter />
			</div>

			{/* 맵 렌더링 컴포넌트 */}
			<div className='google-map'>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: defaultProps.apiKey,
						language: defaultProps.language,
						region: defaultProps.region,
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
				<MyMarker
					key={'BTS'}
					locate={'광화문'}
					text={'BTS is World Class!'}
					lat={37.5758772}
					lng={126.9768121}
					src={'https://lh3.googleusercontent.com/-FzskTh6S9uI/YbVqhdkz-NI/AAAAAAAABhY/H7HgifUO4gsk8vHrXW6OG2uV72F1c47vACNcBGAsYHQ/s1600/1639279211589306-0.png'}
				/>
				<MyMarker
					key={'BlackPink'}
					locate={'경복궁'}
					text={'BlackPink is World Class!'}
					lat={37.579617}
					lng={126.977041}
					src={'https://tl.vhv.rs/dpng/s/493-4931814_blackpink-blink-jisoo-jenny-lisa-rose-kpop-stickers.png'}
				/>
				</GoogleMapReact>
			</div>
		</div>
	);
}

export default GoogleMapApi;