import axios from 'axios';
import jsonp from 'jsonp';

const serviceKey = process.env.REACT_APP_TOURAPI_KO /* 서비스 KEY */

export function locationBasedList(location, setAreaCode, setSigunguCode) {
	// const url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList'; /* 서비스 URL */

	// const result = axios.get(url + '?serviceKey=' + serviceKey, {
	// 	params: {
	// 		numOfRows: '10',
	// 		pageNo: '1',
	// 		MobileOS: 'ETC',
	// 		MobileApp: 'Kculter',
	// 		arrange: 'A',
	// 		contentTypeId: '15',
	// 		mapX: location.lng,
	// 		mapY: location.lat,
	// 		radius: '1000',
	// 		listYN: 'Y',
	// 		modifiedtime: '',
	// 	}
	// })

	// return (result
	// .then((response) => {
  //   console.log(response.status);
  //   console.log(response.statusText);
  //   console.log(response.headers);
  //   console.log(response.config);
	// 	for (let j = 0; j < response.data.response.body.items.item.length; j++) {
	// 		console.log(response.data.response.body.items.item[j]);
	// 		setAreaCode(response.data.response.body.items.item[j].areacode);
	// 		setSigunguCode(response.data.response.body.items.item[j].sigungucode);
	// 	}
	// })
	// .catch((error) => {
	// 	console.log(error);
	// }));

// 	var xhr = new XMLHttpRequest();
// var url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode'; /*URL*/
// var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '3Z%2FYQWOyIAR89XtBFrgHdHGxDwSP12fVxUYyqy5VxpHHRNUVhYp3U9ptrdhgHFQ8OnEmPidWt4MZl%2BZlv70L%2Bw%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
// queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
// queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent('1'); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');
}

export function getStay(areaCode, sigunguCode) {
	const url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay'; /* 서비스 URL */

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

// 	var xhr = new XMLHttpRequest();
// var url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay'; /*URL*/
// var queryParams = '?' + encodeURIComponent('serviceKey') + '='+ '3Z%2FYQWOyIAR89XtBFrgHdHGxDwSP12fVxUYyqy5VxpHHRNUVhYp3U9ptrdhgHFQ8OnEmPidWt4MZl%2BZlv70L%2Bw%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
// queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
// queryParams += '&' + encodeURIComponent('arrange') + '=' + encodeURIComponent('A'); /**/
// queryParams += '&' + encodeURIComponent('listYN') + '=' + encodeURIComponent('Y'); /**/
// queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('sigunguCode') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('hanOk') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('benikia') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('goodStay') + '=' + encodeURIComponent(''); /**/
// queryParams += '&' + encodeURIComponent('modifiedtime') + '=' + encodeURIComponent(''); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
// 			console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');
}