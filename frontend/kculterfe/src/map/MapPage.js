import React, {
	useState,
	useEffect,
} from 'react';
import {
	useJsApiLoader
} from '@react-google-maps/api';
import {
	getPlaceApi,
	getPinApi
} from './container/getInfo'
import MapRender from './presentation/MapRender';
import './style/MapPage.css';

// 맵페이지를 로드하기 전에 DB의 모든 정보를 받아옵니다. (아이돌, 문화체험, 숙박업소, 근처관광지)
// props로 받은 key와 type을 MapRender 컴포넌트로 전달합니다.

// 구글맵 컴포넌트를 렌더링하기 전에 필요한 정보를 백엔드를 통해 받아옵니다.
function MapPage(props) {
	// 구글맵API를 사용하기 위한 객체입니다.
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'ko',
		libraries: ['places'],
	});
	const [place, setPlace] = useState(null);
	const [pin, setPin] = useState(null);
	const [isLoadedApi, setIsLoadedApi] = useState(false);

	useEffect(() => {
		const fetchData = async() => {
			// const url = props.type === "kpop" ? "/place" : "/culture";
			// const placeData = await getPlaceApi(url, props.type, props.key);

			// 임시
			const url = "/place";
			const type = "kpop";
			const key = 1;
			// 임시

			setPlace(await getPlaceApi(url, key, type));
			setPin(await getPinApi("/pin/kpop", 1))
			setIsLoadedApi(true);
		}
		fetchData();
	}, [])
	return (
		isLoaded &&
		isLoadedApi &&
		<MapRender
		place={place}
		pin={pin}
		// stay={stay}
		type={props.type}
		/>
	);
}

export default MapPage;