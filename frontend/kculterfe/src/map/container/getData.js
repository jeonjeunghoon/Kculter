import {
	getPlaceApi,
	getPinApi,
} from './getInfo';
import {
	CLICK_PLACE,
} from '../../redux/reducer';

export async function getCourseData(kculter, setKculter, dispatch) {
	setKculter(prev => ({
		...prev,
		center: {
			lat: kculter.course.place[0].lat,
			lng: kculter.course.place[0].lng,
		}
	}));
	const placeToRedux = {
		head: "COURSE",
		imageUrl: "",
		address: kculter.course.place[0].address,
		culture: kculter.course.place[0].culture,
		explain: kculter.course.place[0].explain,
		fileUrl: kculter.course.place[0].fileUrl,
		kpop: kculter.course.place[0].kpop,
		name: kculter.course.place[0].name,
		lat: kculter.course.place[0].lat,
		lng: kculter.course.place[0].lng,
		placeHash: kculter.course.place[0].placeHash,
		placeType: kculter.course.place[0].placeType,
		status: kculter.course.place[0].status,
	}
	dispatch({
		type: CLICK_PLACE,
		data: placeToRedux,
	});
}
	
export async function getConcertData(kculter, setKculter) {
	const pin = await getPinApi("/pin/", "kpop", kculter.concertProps.keyHash);
	
	setKculter(prev => ({
		...prev,
		center: {
			lat: kculter.concertProps.lat,
			lng: kculter.concertProps.lng
		},
		concert: {
			place: null,
			pin: pin,
		}
	}));
}

export async function getKculterData(setKculter, type, keyHash, dispatch) {
	let pramType = "";
	if (type === 1) {
		pramType = "kpop";
	} else if (type === 2) {
		pramType = "culture";
	}
	const place = await getPlaceApi("/place/", pramType, keyHash);
	const pin = await getPinApi("/pin/", pramType, keyHash);
	if (place && pin && place.data && pin.data) {
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
		const placeToRedux = {
			head: window.sessionStorage.getItem("title"),
			imageUrl: pin.data.imageUrl,
			address: place.data[0].address,
			culture: place.data[0].culture,
			explain: place.data[0].explain,
			fileUrl: place.data[0].fileUrl,
			kpop: place.data[0].kpop,
			name: place.data[0].name,
			lat: place.data[0].lat,
			lng: place.data[0].lng,
			placeHash: place.data[0].placeHash,
			placeType: place.data[0].placeType,
			status: place.data[0].status,
		}
		dispatch({
			type: CLICK_PLACE,
			data: placeToRedux,
		});
	}
}

export async function getData(kculter, setKculter, dispatch) {
	if (kculter.course.place.length > 0) {
		await getCourseData(kculter, setKculter, dispatch);
	}	else if (kculter.concertProps.keyHash) {
		await getConcertData(kculter, setKculter, dispatch);
	} else {
		await getKculterData(setKculter, kculter.kProps.type, kculter.kProps.keyHash, dispatch);
	}
}