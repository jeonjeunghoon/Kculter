export function getAreaCode() {
	let xhr = new XMLHttpRequest();
	let url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchStay'; /* 필수 항목 URL */
	let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'3Z%2FYQWOyIAR89XtBFrgHdHGxDwSP12fVxUYyqy5VxpHHRNUVhYp3U9ptrdhgHFQ8OnEmPidWt4MZl%2BZlv70L%2Bw%3D%3D'; /*Service Key*/
	
	// 다른 api와 비교하여 이 부분만 작성법이 다르다.
	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지에 보여줄 개수 */
	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */
	queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /* 모바일OS 종류 */
	queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('Kculter'); /* 앱 이름 */
	queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent('11'); /* 지역코드 */
	
	xhr.open('GET', url + queryParams);
	xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
	};

	xhr.send('');
}

export function getStay() {
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