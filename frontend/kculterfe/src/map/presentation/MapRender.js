import React, {
	useState,
} from 'react';
import {
	GoogleMap,
} from '@react-google-maps/api';
import Search from './Search';
import MapMarker from './MapMarker';
import MapCard from './MapCard';
import {
	handleOnDragEndGM,
	handleOnClickGM,
} from '../container/handleGM';
// redux
import { useDispatch } from 'react-redux';
// 필터
import Filter from './Filter';

function MapRender(props) {
	// redux
	const dispatch = useDispatch();
	// 공식 구글맵 api object
	const google = window.google;
	// 구글맵 api 설정
	const [map, setMap] = useState(null);
	const [center, setCenter] = useState({
		lat: 37.566535,
		lng: 126.9779692,
	});
	const [zoom, setZoom] = useState(12);
	const options = {
		mapTypeControl: false,
		streetViewControl: false,
		zoomControl: false,
		fullscreenControl: false,
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

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				onLoad={(map) => setMap(map)}
				onUnmount={() => setMap(null)}
				onClick={e => handleOnClickGM(e, google, map, dispatch, setCenter, setZoom)} // 구글의 기본 마커를 클릭할 때 작동하는 함수
				onDragEnd={() => handleOnDragEndGM(map, setCenter)}
			>

				{/* 검색창 */}
				<Search
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>

				<Filter />

				{/* 마커 */}
				<MapMarker
					place={props.place.data}
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>

				{/* 카드 */}
				<MapCard
					setCenter={setCenter}
					setZoom={setZoom}
				/>
			</GoogleMap>
		</div>
	)
}

export default MapRender;