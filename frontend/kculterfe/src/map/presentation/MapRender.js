import React, {
	useEffect,
	useState,
} from 'react';
import {
	GoogleMap,
} from '@react-google-maps/api';
import {
	handleOnLoad,
	handleOnDragEndGM,
	handleOnClickGM,
	handleOnUnmount,
} from '../container/handleGM';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import {
	getPinApi
} from '../container/getInfo'
import Search from './Search';
import MapMarker from './MapMarker';
import MapCard from './MapCard';
import MapFilter from './MapFilter'

import staypin from '../test.png';

function MapRender(props) {
	const dispatch = useDispatch();
	const google = window.google;
	const [map, setMap] = useState(null);
	const [center, setCenter] = useState({
		lat: 37.5509895,
		lng: 126.9908991,
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

	const [isStay, setIsStay] = useState(null);
	const [url, setUrl] = useState(null);
	const [near, setNear] = useState(null);
	useEffect(() => {
		if (isStay === true) {
			setUrl(() => "/near/stay?lat=");
			handleOnDragEndGM(map, "/near/stay?lat=", setNear);
		} else if (isStay === false) {
			setUrl(() => "/near/tour?lat=");
			handleOnDragEndGM(map, "/near/tour?lat=", setNear);
		}
	}, [isStay]);

	const mapConcert = useSelector(state => state.mapConcert);
	const [concert, setConcert] = useState(null);
	const [concertPin, setConcertPin] = useState(null);
	useEffect(() => {
		if (mapConcert.lat && mapConcert.lng) {
			const fetchData = async() => {
				const pin = await getPinApi("/pin/", "kpop", mapConcert.keyHash);
				setConcertPin(() => pin);
				setCenter(() => ({
					lat: mapConcert.lat,
					lng: mapConcert.lng,
				}));
				setConcert(() => [{
					keyHash: mapConcert.keyHash,
					title: mapConcert.concertName,
					starName: mapConcert.starName,
					imageUrl: mapConcert.img,
					explain: mapConcert.explain,
					lat: mapConcert.lat,
					lng: mapConcert.lng,
				}]);
			}
			fetchData();
		}
	}, [map])

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				onLoad={map => handleOnLoad(map, setMap, setIsStay, url, setUrl, setNear)}
				onUnmount={() => handleOnUnmount(map, setMap, dispatch)}
				onClick={e => handleOnClickGM(map, e, google, setCenter, setZoom, dispatch)}
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
					kPlace={props.kculter.place}
					near={near}
					concert={concert}
					kPin={props.kculter.pin}
					stayPin={{imageUrl: staypin}}
					tourPin={{imageUrl: "https://toppng.com/uploads/preview/mountain-png-transparent-free-images-clip-art-mountain-logo-11562903198rqfbyusjl7.png"}}
					concertPin={concertPin}
					coursePin={""}
					isStay={isStay}
					setCenter={setCenter}
					setZoom={setZoom}
					dispatch={dispatch}
				/>

				{/* 카드 */}
				<MapCard
					near={near}
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