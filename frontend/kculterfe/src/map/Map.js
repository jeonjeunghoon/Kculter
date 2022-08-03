import React, {
	useState,
} from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import SearchBox from './SearchBox';
import MapMarker from './MapMarker';
import Stay from './Stay';
import CurrentInfoWindow from './CurrentInfoWindow';
import { handleOnLoad } from './handleOnLoad';
import * as TourApi from './TourApi';


function Map() {
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
	const [browserHasGeolocation, setBrowserHasGeolocation] = useState(false);
	const [geoService, setGeoService] = useState(false);

//

// TourApi.locationBasedList();
// TourApi.getStay();

// const [location, setLocation] = useState(center);
// 	const [areaCode, setAreaCode] = useState(1); // 지역코드: 강남구를 기본 값으로 둔다.
// 	const [sigunguCode, setSigunguCode] = useState(1); // 시군구 코드

// 	useEffect(() => {
// 		console.log('Before: ', location, areaCode, sigunguCode);
// 		/*

// 		// async, await로 areacode, sigungucode를 설정해야 한다.const [center, setCenter] = useState({ lat: 37.5758772, lng: 126.9768121 });
// 	const [selected, setSelected] = useState(null);
// 		// 받아온 숙소 정보를 이용해 마커 및 호버링된 컴포넌트 등을 만들어야 한다.
		
// 		*/
// 		const fetchData = async () => {
// 			const res1 = await TourApi.locationBasedList(location, setAreaCode, setSigunguCode); // location 값을 이용해 지역코드 및 시군구코드 불러오기
// 			const res2 = await TourApi.getStay(areaCode, sigunguCode); // 지역 코드와 시군구 코드를 이용해 주변의 숙소를 검색한다.
// 			console.log('res1: ', res1);
// 			console.log('res2: ', res2);
// 			console.log('After: ', location, areaCode, sigunguCode);
// 		}
// 		fetchData();
// 	}, [location]);

	console.log(current);

	return (
		<div className='map-container'>
			{/* 검색창 */}
			<SearchBox
				setCenter={setCenter}
				setSelected={setSelected}
			/>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				onLoad={map => handleOnLoad(map, setCenter, setCurrent, setBrowserHasGeolocation, setGeoService)}
				mapContainerClassName='map-container'
				options={options}
				zoom={15}
				center={center}
			>
				{/* 마커클러스터와 마커 */}
				<MapMarker />
				{/* 현재위치 infoWindow */}
				<CurrentInfoWindow
					center={center}
					current={current}
					browserHasGeolocation={browserHasGeolocation}
					geoService={geoService}
				/>
			</GoogleMap>

			{/* 숙소 카드 */}
			<Stay />
		</div>
	)
}

export default Map;