import {
	getPlaceApi,
	getPinApi,
} from './getInfo';

export async function getMypageData(kculter, setKculter) {
	
}
	
export async function getConcertData(kculter, setKculter) {
	const pin = await getPinApi("/pin/", "kpop", kculter.concert.keyHash);
	setKculter(prev => ({
		...prev,
		center: {
			lat: kculter.concert.lat,
			lng: kculter.concert.lng
		},
		data: {
			place: [{
				keyHash: kculter.concert.keyHash,
				head: kculter.concert.starName,
				name: kculter.concert.concertName,
				fileUrl: kculter.concert.img,
				explain: kculter.concert.explain,
				lat: kculter.concert.lat,
				lng: kculter.concert.lng,
			}],
			pin: pin.data,
		},
	}));
}

export async function getKculterData(kculter, setKculter, type, keyHash) {
	let pramType = "";
	if (type === 1) {
		pramType = "kpop";
	} else if (type === 2) {
		pramType = "culture";
	}
	const place = await getPlaceApi("/place/", pramType, keyHash);
	const pin = await getPinApi("/pin/", pramType, keyHash);
	if (place.data && pin.data) {
		setKculter(prev => ({
			...prev,
			center: {
				lat: place.data[0].lat,
				lng: place.data[0].lng,
			}, 
			data: {
				place: place.data,
				pin: pin.data,
			},
		}));
	}
}

export async function getCourseData(kculter, setKculter) {
	
}

export async function getData(kculter, setKculter) {
	if (kculter.course.length > 0) {
		await getCourseData(kculter, setKculter);
	}	else if (kculter.concert.keyHash) {
		await getConcertData(kculter, setKculter);
	}	else if (kculter.mypage) {
		await getMypageData(kculter, setKculter);
	} else {
		await getKculterData(kculter, setKculter, kculter.kProps.type, kculter.kProps.keyHash);
	}
}