import React, {
	useEffect,
	useState,
} from 'react';
import {
	GoogleMap,
} from '@react-google-maps/api';
import Search from './Search';
import MapMarkerClustered from './MapMarkerClustered';
import Stay from './Stay';
import {
	handleDragEndGM,
	handleClickGM,
} from '../container/handleGM';

import CourseForm from './CourseForm';
import CourseListView from './CourseListView';

function MapRender() {
	// 공식 구글맵 api object
	const google = window.google;

	// 구글맵 api 설정
	const [map, setMap] = useState(null);
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
		// clickableIcons: false, false하면 안되고 info만 안뜨게 해야 한다.
	};

	// 숙소 데이터
	const [stayData, setStayData] = useState(null);

	const [courseList, setCourseList] = useState([]);
	const [courseId, setCourseId] = useState(0);

	const handleOnCreate = (courseInfo) => {
		setCourseList(courseList.concat({ id: courseId, place: courseInfo.place }));
		setCourseId(course => course + 1);
	}
	
	useEffect(() => {
		console.log(courseList);
		console.log('courseId:', courseId);
	}, [courseList]);

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				onLoad={map => setMap(map)}
				onDragEnd={() => handleDragEndGM(map, setCenter, setStayData)}
				onClick={e => handleClickGM(e, google, map)}
			>

				{/* 검색창 */}
				<Search
					setCenter={setCenter}
					setZoom={setZoom}
				/>

				<CourseForm onCreate={(courseInfo) => handleOnCreate(courseInfo)} />
				<CourseListView courseList={courseList} />

				{/* 아이돌/숙소 마커 */}
				<MapMarkerClustered
					stayData={stayData}
					setCenter={setCenter}
				/>

				{/* 숙소 카드 */}
				<Stay
					stayData={stayData}
					setCenter={setCenter}
				/>

			</GoogleMap>
		</div>
	)
}

export default MapRender;