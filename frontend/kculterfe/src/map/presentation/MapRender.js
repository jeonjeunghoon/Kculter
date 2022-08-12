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

	function handleOnClickSearchMarker(e, map) {
		// geocoder + placeId로 장소 세부 정보 찾기
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({'latLng': e.latLng}, (result, status) => {
			if (status !== google.maps.GeocoderStatus.OK) {
				alert(status);
			}
			if (status == google.maps.GeocoderStatus.OK) {
				const placeId = result[0].place_id;
				console.log(placeId);
				const request = {
					placeId: placeId,
					fields: ['name', 'formatted_address', 'place_id', 'geometry'],
				};
				const service = new window.google.maps.places.PlacesService(map);
				service.getDetails(request, (place, status) => {
					if (status === google.maps.places.PlacesServiceStatus.OK &&
						place &&
						place.geometry &&
						place.geometry.location) {
							console.log(place, status);
						}
				})
			}
		});

		// console.log(e.latLng.lat(), e.latLng.lng());
		// console.log(service);
	}

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				// onLoad={map => handleOnLoad(map, setCenter, setCurrent, setGeoService, setLoaded, setFocus, setMapRef)}
				onLoad={map => {setMap(map)}}
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

				{/* TEST용 */}
				<Marker
						position={center}
						visible={true}
						onClick={(e) => handleOnClickSearchMarker(e, map)}
				/>



				{search
					?
						<Marker
						position={center}
						visible={true}
						onClick={(e) => handleOnClickSearchMarker(e, map)}
						/>
					:
						<></>
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