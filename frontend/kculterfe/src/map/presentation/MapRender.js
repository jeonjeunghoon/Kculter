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
} from 'react-redux';
import Search from './Search';
import MapMarker from './MapMarker';
import MapCard from './MapCard';
import MapFilter from './MapFilter'

import staypin from '../test.png';

function MapRender(props) {
	const dispatch = useDispatch();
	const google = window.google;
	const [map, setMap] = useState(null);
	const [center, setCenter] = useState(props.center);
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

	const [kPlace, setKPlace] = useState(props.kPlace);
	const [kPin, setKPin] = useState(props.kPin);
	const [isStay, setIsStay] = useState(true);
	const [url, setUrl] = useState("/near/stay?lat=");
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

	return (
		<div className='map-container'>
			{/* 구글맵 인스턴스 */}
			<GoogleMap
				mapContainerClassName='map-container'
				options={options}
				center={center}
				zoom={zoom}
				onLoad={map => handleOnLoad(map, setMap, url, setNear)}
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
				<MapFilter
					list={["a", "b", "c"]}
				/>

				{/* 마커 */}
				<MapMarker
					kPlace={kPlace}
					near={near}
					concert={props.concert}
					kPin={kPin}
					stayPin={{imageUrl: staypin}}
					tourPin={{imageUrl: "https://toppng.com/uploads/preview/mountain-png-transparent-free-images-clip-art-mountain-logo-11562903198rqfbyusjl7.png"}}
					concertPin={props.concertPin}
					coursePin={""}
					isStay={isStay}
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