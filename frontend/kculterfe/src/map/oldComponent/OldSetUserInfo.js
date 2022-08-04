export function setLanguage(props) {
	let input = prompt('언어 코드 입력');

	if (input) {
		props.language = input;
		props.region = input;
	} else {
		props.language = 'en';
		props.region = 'en';
	}
}

function getPos() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

async function getGps() {
	if (navigator.geolocation) { // geolocation API 액세스 여부 확인
		const pos = await getPos();
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

export async function setCurPos(center) {
	const { lat, lng } = await getGps();
	center.lat = lat;
	center.lng = lng;
}
