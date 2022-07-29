import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const GetAreaCodeApi = () => {
	let xhr = new XMLHttpRequest();
	let url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay'; /* 필수 항목 URL */
	let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'3Z%2FYQWOyIAR89XtBFrgHdHGxDwSP12fVxUYyqy5VxpHHRNUVhYp3U9ptrdhgHFQ8OnEmPidWt4MZl%2BZlv70L%2Bw%3D%3D'; /*Service Key*/
	
	// 다른 api와 비교하여 이 부분만 작성법이 다르다.
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
	queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('Kculter'); /**/
	queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent('1'); /**/
	
	xhr.open('GET', url + queryParams);
	xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
	};

	xhr.send('');
}

const GetStayApi = props => {
	let xhr = new XMLHttpRequest();
	let url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay'; /* 필수 항목 URL */
	let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'3Z%2FYQWOyIAR89XtBFrgHdHGxDwSP12fVxUYyqy5VxpHHRNUVhYp3U9ptrdhgHFQ8OnEmPidWt4MZl%2BZlv70L%2Bw%3D%3D'; /*Service Key*/
	
	// 다른 api와 비교하여 이 부분만 작성법이 다르다.
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
	queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
	queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
	queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('A'); /**/
	queryParams += '&' + encodeURIComponent('listYN') + '=' + encodeURIComponent('Y'); /**/
	queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(''); /**/
	queryParams += '&' + encodeURIComponent('sigunguCode') + '=' + encodeURIComponent(''); /**/
	queryParams += '&' + encodeURIComponent('hanOk') + '=' + encodeURIComponent(''); /**/
	queryParams += '&' + encodeURIComponent('benikia') + '=' + encodeURIComponent(''); /**/
	queryParams += '&' + encodeURIComponent('goodStay') + '=' + encodeURIComponent(''); /**/
	queryParams += '&' + encodeURIComponent('modifiedtime') + '=' + encodeURIComponent(''); /**/
	
	xhr.open('GET', url + queryParams);
	xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
	};

	xhr.send('');
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
	const [areaCode, setAreaCode] = useState('B02010100');
	
	GetCurPos(defaultProps.center); // 현재 위치 좌표 받아오기 (비동기 이슈 해결 X)
	// GetLang(defaultProps); // 언어 설정 함수
	GetAreaCodeApi(); // 지역코드 API 호출
	GetStayApi(areaCode); // 숙박 API 호출

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