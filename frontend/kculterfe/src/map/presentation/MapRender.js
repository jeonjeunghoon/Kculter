import React, {
	useState,
	useRef,
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
import * as TourApi from '../api/TourApi';

function MapRender() {
	// 공식 구글맵 api object
	const google = window.google;

	// 구글맵 api 설정
	const [center, setCenter] = useState({ lat: 37.5758772, lng: 126.9768121 });
	const options = {
		minZoom: 2,
		mapTypeControl: false,
		streetViewControl: false,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP,
		}
	};

	// 검색창
	const [selected, setSelected] = useState(null);

	// 현재위치버튼
	const [current, setCurrent] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [geoService, setGeoService] = useState(false);

	// 맵 center 값
	const [mapref, setMapRef] = useState(null);

	// const [areacode, setAreacode] = useState(1); // 지역코드: 강남구를 기본 값으로 둔다.
	// const [sigungucode, setSigungucode] = useState(1); // 시군구 코드
	// TourApi.locationBasedList(center, setAreacode, setSigungucode);
	// TourApi.getStay(areacode, sigungucode);

	console.log('위도 경도', center);

	return (
		<div className='map-container'>
			{/* 검색창 */}
			<SearchBox
				setCenter={setCenter}
				setSelected={setSelected}
			/>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				onLoad={map => handleOnLoad(map, setCenter, current, setCurrent, setGeoService, setLoaded, setMapRef)}
				mapContainerClassName='map-container'
				options={options}
				zoom={15}
				onDragEnd={() => handleCenterChanged(mapref, setCenter)}
				center={center}
			>
				{/* 마커클러스터와 마커 */}
				<MapMarker
					center={center}
				/>
				{/* 현재위치 infoWindow */}
				<CurrentInfoWindow
					center={center}
					current={current}
					loaded={loaded}
					geoService={geoService}
				/>
			</GoogleMap>

			{/* 숙소 카드 */}
			<Stay />
		</div>
	)
}

export default MapRender;