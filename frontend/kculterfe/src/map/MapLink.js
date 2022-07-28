import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const GetPos = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

const GetGps = async() => {
	if (navigator.geolocation) { // geolocation API 액세스 여부 확인
		const pos = await GetPos();
		return {
			lat: pos.coords.latitude,
			lng: pos.coords.longitude
		};
	} else {
		console.log('geolocation X');
		return {
			lat: 37.5758772,
			lng: 126.9768121
		}
	}
}

const GetCurPos = async(center) => {
	const { lat, lng } = await GetGps();
	center.lat = lat;
	center.lng = lng;
}

const GetLang = props => {
	let input = prompt('언어 코드 입력');
	if (input) {
		props.language = input;
		props.region = input;
	} else {
		props.language = 'en';
		props.region = 'en';
	}
}

const GetTourApi = () => {
	axios({
		//request
		method: 'get',
		url: 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode',
		responseType: 'type'
	}).then(function (response) {
		console.log(response);
	})
}

const MapLink = () => {
	const defaultProps = {
		center: {
			lat: 0,
			lng: 0
		},
		language: null,
		region: null,
		zoom: 15,
	}
	GetCurPos(defaultProps.center); // 현재 위치 좌표 받아오기 (비동기 이슈 해결 X)
	// GetLang(defaultProps); // 언어 설정 함수
	GetTourApi(); // TourApi 호출

	return (
		<nav style={{border: '1px solid black'}}>
			<Link
				to='MapPage'
				state={{
					center: defaultProps.center,
					language: defaultProps.language,
					region: defaultProps.region,
					zoom: defaultProps.zoom
				}}
			>
			Go to MapPage
			</Link>
		</nav>
	);
}

export default MapLink;