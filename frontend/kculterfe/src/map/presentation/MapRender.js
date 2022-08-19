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
	handleDragEndGM,
	handleClickGM,
} from '../container/handleGM';
// redux
import { useDispatch } from 'react-redux';
// 필터
import Filter from './Filter';


// 맵을 렌더링하는 컴포넌트입니다.
// MapPage에서 받아온 정보를 토대로 맵에 마커들을 렌더링합니다. (AllVisible = false)
// key, type이 all이라면 모든 마커들을 보여줍니다. (AllVisible = true)
// key, type이 특정한 주제라면 해당 주제의 마커를 보여줍니다. (특정MarkerVisible = true)
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
		// clickableIcons: false, false하면 안되고 info만 안뜨게 해야 한다.
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
				// onDragEnd={() => handleDragEndGM(map, setCenter, setMarker)} // 근처의 무엇을 보여줘야하나요?
				// onClick={e => handleClickGM(e, google, map, dispatch)} // 구글의 기본 마커를 클릭할 때 작동하는 함수
			>

				{/* 검색창 */}
				<Search
					setCenter={setCenter}
					setZoom={setZoom}
				/>

				<Filter />

				{/* 마커 */}
				<MapMarker
					place={props.place.data}
					// stay={props.stay.data}
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>

				{/* 카드 */}
				{/* <MapCard
					setCenter={setCenter}
					setZoom={setZoom}
				/> */}
			</GoogleMap>
		</div>
	)
}

export default MapRender;