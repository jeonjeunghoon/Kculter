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
import {
	useSelector,
} from 'react-redux';
import MapRender from './presentation/MapRender';
import './style/MapPage.css';

const lib = ['places'];

function MapPage() {
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'en',
		libraries: lib,
	});
	const [isLoadedApi, setIsLoadedApi] = useState(false);

	const [center, setCenter] = useState({
		lat: 37.5509895,
		lng: 126.9908991,
	});
	const [kculter, setKculter] = useState(null);
	const kculterProps = {
		keyHash: window.sessionStorage.getItem("keyHash"),
		type: Number(window.sessionStorage.getItem("type")),
	}
	const mapConcert = useSelector(state => state.mapConcert);
	const [concert, setConcert] = useState(null);
	const [concertPin, setConcertPin] = useState(null);
	useEffect(() => {
		const fetchData = async() => {
				let type = "";
				if (kculterProps.type === 1) {
					type = "kpop";
				} else {
					type = "culture";
				}
				const place = await getPlaceApi("/place/", kculterProps.keyHash, type);
				const pin = await getPinApi("/pin/", type, kculterProps.keyHash);
				if (place && pin) {
					setKculter(() => ({
						place: place.data,
						pin: pin.data,
					}))
				}
				if (mapConcert.lat && mapConcert.lng) {
					const pin = await getPinApi("/pin/", "kpop", mapConcert.keyHash);
					setConcertPin(() => pin);
					setCenter(() => ({
						lat: mapConcert.lat,
						lng: mapConcert.lng,
					}));
					setConcert(() => [{
						keyHash: mapConcert.keyHash,
						head: mapConcert.starName,
						name: mapConcert.concertName,
						fileUrl: mapConcert.img,
						explain: mapConcert.explain,
						lat: mapConcert.lat,
						lng: mapConcert.lng,
					}]);
				}
				setIsLoadedApi(() => true);
			}
		fetchData();
	}, [])

	return (
		isLoaded &&
		isLoadedApi &&
		<MapRender
		center={center}
		kculter={kculter}
		kPlace={kculter.place}
		kPin={kculter.pin}
		concert={concert}
		concertPin={concertPin}
		/>
	);
}

export default MapPage;