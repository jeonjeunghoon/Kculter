import React, {
	useEffect,
	useState,
} from 'react';
import {
	GoogleMap,
} from '@react-google-maps/api';
import Search from './Search';
import MapMarker from './MapMarker';
import MapCard from './MapCard';
import MapFilter from './MapFilter'
import {
	handleOnLoad,
	handleOnDragEndGM,
	handleOnClickGM,
} from '../container/handleGM';
// redux
import {
	useDispatch
} from 'react-redux';

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
	const [isStay, setIsStay] = useState(true);
	const [url, setUrl] = useState("/near/stay?lat=");
	const [near, setNear] = useState(null);
	useEffect(() => {
		console.log(isStay);
		if (isStay) {
			setUrl("/near/stay?lat=");
			handleOnDragEndGM(map, url, setNear);
		} else {
			setUrl("/near/tour?lat=");
			handleOnDragEndGM(map, url, setNear);
		}
	}, [isStay])

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				onLoad={(map) => handleOnLoad(map, setMap, url, setNear)}
				onUnmount={() => setMap(null)}
				onClick={e => handleOnClickGM(map, e, google, setCenter, setZoom, dispatch)} // 구글의 기본 마커를 클릭할 때 작동하는 함수
				onDragEnd={() => handleOnDragEndGM(map, url, setNear)}
			>

				{/* 검색창 */}
				<Search
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>

				{/* 필터 */}
				<MapFilter />

				{/* 마커 */}
				<MapMarker
					kculterPlace={props.kculterPlace.data}
					near={near}
					pin={props.pin.data}
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>

				{/* 카드 */}
				<MapCard
					near={near}
					isStay={isStay}
					setIsStay={setIsStay}
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>
			</GoogleMap>
		</div>
	)
}

export default MapRender;