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

function MapRender(props) {
	const dispatch = useDispatch();
	const concert = useSelector(state => state.mapConcert);
	const kculterPlace = useSelector(state => state.kculterPlace);
	const pin = useSelector(state => state.pin);
	const google = window.google;
	const [map, setMap] = useState(null);
	const [center, setCenter] = useState({
		lat: 37.5509895,
		lng: 126.9908991,
	});;
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
	const [concertPlace, setConcertPlace] = useState(null);
	const [concertPin, setConcertPin] = useState(null);
	useEffect(() => {
		if (concert.lat && concert.lng) {
			const fetchData = async() => {
				const pin = await getPinApi("/pin/" + "kpop", concert.key);
				setConcertPin(() => pin);
				setCenter(() => ({
					lat: concert.lat,
					lng: concert.lng,
				}));
				setConcertPlace([{
					lat: concert.lat,
					lng: concert.lng,
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
					kculterPlace={kculterPlace}
					near={near}
					concertPlace={concertPlace}
					kPin={pin}
					stayPin={{imageUrl: "https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"}}
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