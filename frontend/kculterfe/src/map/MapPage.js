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
import {
	useSelector
} from 'react-redux';
import './style/MapPage.css';

function MapPage(props) {
	const data = useSelector(state => state.idolCulture);
	console.log(data);
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'ko',
		libraries: ['places'],
	});
	const [kculterPlace, setKculterPlace] = useState(null);
	const [pin, setPin] = useState(null);
	const [isLoadedApi, setIsLoadedApi] = useState(false);

	useEffect(() => {
		const fetchData = async() => {
			const url = "/place";
			let type = "";
			if (data.type === 1) {
				type = "kpop";
			} else {
				type = "culture";
			}
			setKculterPlace(await getPlaceApi(url, data.key, type));
			setPin(await getPinApi("/pin/" + type, data.key))
			setIsLoadedApi(true);
		}
		fetchData();
	}, [])

	return (
		isLoaded &&
		isLoadedApi &&
		<MapRender
		kculterPlace={kculterPlace}
		pin={pin}
		type={props.type}
		/>
	);
}

export default MapPage;