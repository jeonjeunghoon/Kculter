import React, {
	useState,
	useEffect,
} from 'react';
import {
	useJsApiLoader
} from '@react-google-maps/api';
import {
	getData,
} from './container/getData'
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import MapRender from './presentation/MapRender';
import './style/MapPage.css';

const lib = ['places'];

function MapPage() {
	const dispatch = useDispatch();
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'en',
		libraries: lib,
	});
	const reduxConcert = useSelector(state => state.mapConcert);
	const reduxCourse = useSelector(state => state.course);
	const [kculter, setKculter] = useState({
		isLoaded: false,
		center: {
			lat: 37.5509895,
			lng: 126.9908991,
		},
		data: {
			place: null,
			pin: null,
		},
		kProps: {
			keyHash: window.sessionStorage.getItem("keyHash"),
			type: Number(window.sessionStorage.getItem("type")),
		},
		concertProps: reduxConcert,
		concert: {
			place: null,
			pin: null,
		},
		course: {
			place: reduxCourse,
			pin: "",
		},
	});
	
	useEffect(() => {
		const fetchData = async() => {
			await getData(kculter, setKculter, dispatch)
			.then(() => {
				setKculter(prev => ({
					...prev,
					isLoaded: isLoaded,
				}));
			})
		}
		fetchData();
	}, [isLoaded])

	return (
		kculter.isLoaded &&
		<MapRender
			kculter={kculter}
			setKculter={setKculter}
		/>
	);
}

export default MapPage;