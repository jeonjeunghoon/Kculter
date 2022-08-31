import {
	getPlaceApi,
	getPinApi,
} from './getInfo';

export async function getConcert(setData, reduxConcert) {
	const pin = await getPinApi("/pin/", "kpop", reduxConcert.keyHash);
	setData(prev => ({
		...prev,
		center: {
			lat: reduxConcert.lat,
			lng: reduxConcert.lng
		},
		concert: {
			place: [{
				keyHash: reduxConcert.keyHash,
				head: reduxConcert.starName,
				name: reduxConcert.concertName,
				fileUrl: reduxConcert.img,
				explain: reduxConcert.explain,
				lat: reduxConcert.lat,
				lng: reduxConcert.lng,
			}],
			pin: pin.data,
		},
	}));
}

export async function getKculterData(setData, keyHash, type, reduxConcert) {
	let pramType = "";
	if (type === 1) {
		pramType = "kpop";
	} else {
		pramType = "culture";
	}
	const place = await getPlaceApi("/place/", keyHash, pramType);
	const pin = await getPinApi("/pin/", pramType, keyHash);
	setData(prev => ({
		...prev,
		kculter: {
			place: place.data,
			pin: pin.data,
		},
	}));
	if (reduxConcert.lat && reduxConcert.lng) {
		await getConcert(setData, reduxConcert);
	}
}