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

function MapPage() {
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'en',
		libraries: ['places'],
	});
	const [isLoadedApi, setIsLoadedApi] = useState(false);

	const [kculter, setKculter] = useState(null);
	const kculterProps = {
		keyHash: window.sessionStorage.getItem("keyHash"),
		type: Number(window.sessionStorage.getItem("type")),
	}
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
				setIsLoadedApi(() => true);
			}
		fetchData();
	}, [])

	return (
		isLoaded &&
		isLoadedApi &&
		<MapRender
		kculter={kculter}
		/>
	);
}

export default MapPage;