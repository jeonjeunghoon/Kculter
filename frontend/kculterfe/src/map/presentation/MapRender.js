import React, {
	useCallback,
	useEffect,
	useState,
} from 'react';
import {
	GoogleMap,
	Marker,
	MarkerF,
} from '@react-google-maps/api';
import Search from './Search';
import MapMarker from './MapMarker';
import MapCard from './MapCard';
import {
	handleDragEndGM,
	handleClickGM,
} from '../container/handleGM';

// 사이드 네비로 옮길 예정
import CourseForm from './CourseForm';
import CourseListView from './CourseListView';

// redux
import { useDispatch } from 'react-redux';


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
	const [isLoaded, setIsLoaded] = useState(false);
	const [center, setCenter] = useState({
		lat: 37.566535,
		lng: 126.9779692,
	});
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
		// clickableIcons: false, false하면 안되고 info만 안뜨게 해야 한다.
	};
	const [isLoadedMarker, setIsLoadedMarker] = useState(false);

	// courseList
	const [courseList, setCourseList] = useState([]);
	const [courseId, setCourseId] = useState(0);
	const handleOnCreate = (courseInfo) => {
		setCourseList(courseList.concat({ id: courseId, place: courseInfo.place }));
		setCourseId(course => course + 1);
	}

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

				{/* 마커 */}
				<MapMarker
					kpop={props.kpop.data}
					// culture={props.culture.data}
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

				{/* 컴포넌트 렌더링 버튼 >>> 사이드 네비로 옮길 예정 */}
				{/* <CourseForm onCreate={(courseInfo) => handleOnCreate(courseInfo)} />
				<CourseListView courseList={courseList} /> */}

			</GoogleMap>
		</div>
	)
}

export default MapRender;