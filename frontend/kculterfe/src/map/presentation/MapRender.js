import React, {
	useState,
} from 'react';
import {
	Autocomplete,
	GoogleMap,
	Marker,
} from '@react-google-maps/api';
import MapMarker from './MapMarker';
import Stay from './Stay';
import CurrentInfoWindow from './CurrentInfoWindow';
import { handleOnLoad } from '../container/handleOnLoad';
import { handleDragEnd } from '../container/handleDragEnd';
import { handlePlaceChanged } from '../container/handlePlaceChanged';

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

	// SearchBox
	const [input, setInput] = useState(null);
	const [search, setSearch] = useState(false);

	// 현재위치버튼
	const [current, setCurrent] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [geoService, setGeoService] = useState(false);
	const [focus, setFocus] = useState({ lat: 0, lng: 0 });

	// 맵 center 값
	const [mapref, setMapRef] = useState(null);

	// 숙소 데이터
	const [stayData, setStayData] = useState(null);

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				onLoad={map => handleOnLoad(map, setCenter, setCurrent, setGeoService, setLoaded, setFocus, setMapRef)}
				onDragEnd={() => handleDragEnd(mapref, setCenter, setStayData)}
			>
				{/* Search Place */}
				<Autocomplete
					onLoad={autocomplete => setInput(autocomplete)}
					onPlaceChanged={() => handlePlaceChanged(input, setCenter, setZoom, setSearch)}
				>
					<input className='autocomplete-input'
            type="text"
            placeholder="Search place"
          />
				</Autocomplete>
				{search &&
					<Marker
					position={center}
					/>
				}
				{/* 아이돌/숙소 마커 */}
				<MapMarker
					stayData={stayData}
					setCenter={setCenter}
					input={input}
				/>
				{/* 현재위치 infoWindow */}
				<CurrentInfoWindow
					focus={focus}
					center={center}
					current={current}
					loaded={loaded}
					geoService={geoService}
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