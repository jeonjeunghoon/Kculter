import React, {
	useState,
} from 'react';
import {
	useJsApiLoader
} from '@react-google-maps/api';
import axios from 'axios'

import MapRender from './presentation/MapRender';
import './style/MapPage.css';

function getViewPoint(key, type) {
	axios.get('/place?key='+key+'&type='+type)
	.then(function(res){
		console.log(res, '통신 완료');
		return true;
  })
  .catch(function(error){
		console.log(error, "서버 통신 실패");
		return false;
  })
	return true;
}

function MapPage(props) {
	const { isLoaded } = useJsApiLoader({
		id: 'map-page',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
		language: 'ko',
		libraries: ['places'],
	});
	const [key, setKey] = useState(props.key);
	const [type, setType] = useState(props.type);

	return (
		isLoaded && getViewPoint(key, type) // false 일 때 모든 마커 보여주게 하기
			?
				<MapRender />
			:
				<div>Loading ...</div>
	);
}

export default MapPage;