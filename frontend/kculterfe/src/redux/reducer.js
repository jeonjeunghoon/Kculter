// 데이터 추가는 여기에
const initState = {
	place: {
		head: "",
		imageUrl: "",
		address: "",
		culture: "",
		explain: "",
		fileUrl: "",
		kpop: "",
		name: "",
		memberHash: 0,
		lat: 0,
		lng: 0,
		placeHash: "0",
		placeType: 0,
		status: 0,
	},
	course: [],
	member: null,
	idolSelected: true,
	attrSelected: false,
	concertSelected: false,
	dashboardSelected: true,
	settingSelected: false,
	mapConcert: {
		keyHash: 0,
		lat: 0,
		lng: 0,
	},
	courseList: [],
}

// 액션 추가 여기
export const CLICK_PLACE = 'CLICK_PLACE';
export const MODIFY_COURSE = 'MODIFY_COURSE';
export const SIDE_SET_IDOL = 'SIDE_SET_IDOL';
export const SIDE_SET_ATTR = 'SIDE_SET_ATTR';
export const SIDE_SET_CONCERT = 'SIDE_SET_CONCERT';
export const CLEAR_MEMBER = 'CLEAR_MEMBER';
export const PUSH_MEMBER = 'PUSH_MEMBER';
export const SIDE_SET_DASHBOARD = 'SIDE_SET_DASHBOARD';
export const SIDE_SET_SETTING = 'SIDE_SET_SETTING';
export const CLEAR_COURSE = 'CLEAR_COURSE';
export const CLEAR_PLACE = 'CLEAR_PLACE';
export const SET_KCULTER_PLACE = 'SET_KCULTER_PLACE';
export const SET_PIN = 'SET_PIN';
export const MAP_IN_CONCERT = 'MAP_IN_CONCERT';
export const CLEAR_MAP_CONCERT = 'CLEAR_MAP_CONCERT';
export const GET_DIRECTION = 'GET_DIRECTION';

// reducer
export default function reducer(state = initState, action) {
	// 액션 분기점
	switch (action.type) {
		case CLICK_PLACE:
			return {
				...state,
				place: action.data,
			}
		case MODIFY_COURSE:
			return {
				...state,
				course: action.data,
			}
		case SIDE_SET_IDOL:
			return {
				...state,
				idolSelected: action.data,
			}
		case SIDE_SET_ATTR:
			return {
				...state,
				attrSelected: action.data,
			}
		case SIDE_SET_CONCERT:
			return {
				...state,
				concertSelected: action.data,
			}
		case CLEAR_MEMBER:
			return {
				...state,
				member: action.data,
			}
		case PUSH_MEMBER:
			return {
				...state,
				member: action.data,
			}
		case SIDE_SET_DASHBOARD:
			return {
				...state,
				dashboardSelected: action.data,
			}
		case SIDE_SET_SETTING:
			return {
				...state,
				settingSelected: action.data,
			}
		case CLEAR_COURSE:
			return {
				...state,
				course: action.data,
			}
		case CLEAR_PLACE:
			return {
				...state,
				place: action.data,
			}
		case SET_KCULTER_PLACE:
			return {
				...state,
				kculterPlace: action.data,
			}
		case SET_PIN:
			return {
				...state,
				pin: action.data,
			}
		case MAP_IN_CONCERT:
			return {
				...state,
				mapConcert: action.data,
			}
		case CLEAR_MAP_CONCERT:
			return {
				...state,
				mapConcert: action.data,
			}
		case GET_DIRECTION:
			return {
				...state,
				courseList: action.data,
			}
		default:
			return state;
	}
}