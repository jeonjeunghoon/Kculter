import axios from 'axios';

const serviceKey = process.env.REACT_APP_TOURAPI_KO /* 서비스 KEY */

export function locationBasedList(location, setAreaCode, setSigunguCode) {
	const url = 'http://apis.data.go.kr/B551011/KorService/locationBasedList'; /* 서비스 URL */

	const result = axios.get(url + '?serviceKey=' + serviceKey, {
		params: {
			numOfRows: '10',
			pageNo: '1',
			MobileOS: 'ETC',
			MobileApp: 'Kculter',
			arrange: 'A',
			contentTypeId: '15',
			mapX: location.lng,
			mapY: location.lat,
			radius: '1000',
			listYN: 'Y',
			modifiedtime: '',
		}
	})

	return (result
	.then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
		for (let j = 0; j < response.data.response.body.items.item.length; j++) {
			console.log(response.data.response.body.items.item[j]);
			setAreaCode(response.data.response.body.items.item[j].areacode);
			setSigunguCode(response.data.response.body.items.item[j].sigungucode);
		}
	})
	.catch((error) => {
		console.log(error);
	}));
}

export function getStay(areaCode, sigunguCode) {
	const url = 'http://apis.data.go.kr/B551011/KorService/searchStay'; /* 서비스 URL */

	const result = axios.get(url + '?serviceKey=' + serviceKey, {
		params: {
			numOfRows: '10',
			pageNo: '1',
			MobileOS: 'ETC',
			MobileApp: 'Kculter',
			arrange: 'A',
			listYN: 'Y',
			areaCode: '',
			sigunguCode: '',
			hanOk: '',
			benikia: '',
			goodStay: '',
			modifiedtime: '',
		}
	})

	return (result
	.then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
		for (let j = 0; j < response.data.response.body.items.item.length; j++) {
			console.log(response.data.response.body.items.item[j]);
		}
	})
	.catch((error) => {
		console.log(error);
	}));
}