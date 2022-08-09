import React, {
	useState,
} from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import SearchBox from './SearchBox';
import MapMarker from './MapMarker';
import Stay from './Stay';
import CurrentInfoWindow from './CurrentInfoWindow';
import {
	handleOnLoad,
	handleCenterChanged,
} from '../container/handleOnLoad';

function MapRender() {
	// 공식 구글맵 api object
	const google = window.google;

	// 구글맵 api 설정
	const [center, setCenter] = useState({ lat: 37.566535, lng: 126.9779692 });
	const [zoom, setZoom] = useState(10);
	const options = {
		mapTypeControl: false,
		streetViewControl: false,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP,
		},
		minZoom: 10,
		restriction: {
			latLngBounds: {
        north: 80,
        south: -80,
				east: 180,
        west: -180
			},
		},
	};

	// 현재위치버튼
	const [current, setCurrent] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [geoService, setGeoService] = useState(false);
	const [focus, setFocus] = useState({lat: 0, lng: 0});

	// 맵 center 값
	const [mapref, setMapRef] = useState(null);

	// 숙소 데이터
	const [stayData, setStayData] = useState(null);

	return (
		<div className='map-container'>
			{/* 검색창 */}
			<SearchBox
				setCenter={setCenter}
				setZoom={setZoom}
			/>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				onLoad={map => handleOnLoad(map, setCenter, setCurrent, setGeoService, setLoaded, setFocus, setMapRef)}
				mapContainerClassName='map-container'
				options={options}
				zoom={zoom}
				onDragEnd={() => handleCenterChanged(mapref, setCenter, setStayData)}
				center={center}
			>
				{/* 마커클러스터와 마커 */}
				<MapMarker
					stayData={stayData}
					setCenter={setCenter}
				/>
				{/* 현재위치 infoWindow */}
				<CurrentInfoWindow
					focus={focus}
					center={center}
					current={current}
					loaded={loaded}
					geoService={geoService}
				/>
			</GoogleMap>

			{/* 숙소 카드 */}
			<Stay
				stayData={stayData}
				setCenter={setCenter}
			/>
		</div>
	)
}

export default MapRender;