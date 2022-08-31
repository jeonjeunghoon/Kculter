import React, {
	useState,
	useEffect,
} from 'react';
import {
	useJsApiLoader
} from '@react-google-maps/api';
import {
	getKculterData,
} from './container/getKculterData'
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
	const reduxConcert = useSelector(state => state.mapConcert);
	const [data, setData] = useState({
		isLoaded: false,
		center: {
			lat: 37.5509895,
			lng: 126.9908991,
		},
		kculter: null,
		concert: null,
		kculterProps: {
			keyHash: window.sessionStorage.getItem("keyHash"),
			type: Number(window.sessionStorage.getItem("type")),
		},
		reduxConcert: reduxConcert,
	});
	
	useEffect(() => {
		const fetchData = async() => {
			await getKculterData(setData, data.kculterProps.keyHash, data.kculterProps.type, data.reduxConcert)
			.then(() => {
				setData(prev => ({
					...prev,
					isLoaded: isLoaded,
				}));
			})
		}
		fetchData();
	}, [isLoaded])

	return (
		data.isLoaded &&
		<MapRender
			data={data}
			setData={setData}
		/>
	);
}

export default MapPage;