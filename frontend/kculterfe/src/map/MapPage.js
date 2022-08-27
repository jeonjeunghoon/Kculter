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
	useSelector
} from 'react-redux';
import {
	SET_KCULTER_PLACE,
	SET_PIN
} from '../redux/reducer';
import MapRender from './presentation/MapRender';
import './style/MapPage.css';

function MapPage(props) {
	const dispatch = useDispatch();
	const data = useSelector(state => state.idolCulture);
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'ko',
		libraries: ['places'],
	});
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
			const kculterPlace = await getPlaceApi(url, data.key, type);
			const pin = await getPinApi("/pin/" + type, data.key);
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