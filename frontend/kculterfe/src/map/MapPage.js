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
	useDispatch,
} from 'react-redux';
import {
	SET_KCULTER_PLACE,
	SET_PIN
} from '../redux/reducer';
import MapRender from './presentation/MapRender';
import './style/MapPage.css';

function MapPage(props) {
	const dispatch = useDispatch();
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'en',
		libraries: ['places'],
	});
	const [isLoadedApi, setIsLoadedApi] = useState(false);

	const kculterPlaceProps = {
		keyNum: Number(window.sessionStorage.getItem("keyNum")),
		type: Number(window.sessionStorage.getItem("type")),
		title: window.sessionStorage.getItem("title"),
	}
	useEffect(() => {
		const fetchData = async() => {
			console.log(kculterPlaceProps);
			const url = "/place";
			if (kculterPlaceProps.type) {
				kculterPlaceProps.type = "kpop";
			} else {
				kculterPlaceProps.type = "culture";
			}
			const kculterPlace = await getPlaceApi(url, kculterPlaceProps.keyNum, kculterPlaceProps.type);
			const pin = await getPinApi("/pin/" + kculterPlaceProps.type, kculterPlaceProps.keyNum);
			dispatch({
				type: SET_KCULTER_PLACE,
				data: kculterPlace.data,
			})
			dispatch({
				type: SET_PIN,
				data: pin.data,
			})
			setIsLoadedApi(() => true);
		}
		fetchData();
	}, [])

	return (
		isLoaded &&
		isLoadedApi &&
		<MapRender
		type={props.type}
		/>
	);
}

export default MapPage;