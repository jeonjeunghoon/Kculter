import React, {
	useState,
	useEffect,
} from 'react';
import {
	useJsApiLoader
} from '@react-google-maps/api';
import axios from 'axios'

import MapRender from './presentation/MapRender';
import './style/MapPage.css';

function getViewPoint(key, type, setPoint, setIsLoadedPoint) {
	axios.get('/place?key='+key+'&type='+type)
	.then(function(res){
		console.log(res, '통신 완료');
		setPoint(res);
		setIsLoadedPoint(true);
  })
  .catch(function(error){
		console.log(error, "서버 통신 실패");
  })
}

function MapPage(props) {
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'ko',
		libraries: ['places'],
	});
	const [key, setKey] = useState(1);
	const [type, setType] = useState("kpop");
	const [point, setPoint] = useState(null);
	const [isLoadedPoint, setIsLoadedPoint] = useState(false);

	useEffect(() => {
		getViewPoint(key, type, setPoint, setIsLoadedPoint);
	}, []);
	return (
		isLoaded && isLoadedPoint && <MapRender point={point} />
	);
}

export default MapPage;