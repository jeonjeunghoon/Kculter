// 데이터 추가는 여기에
const initState = {
	place: {
		address: "",
		culture: "",
		explain: "",
		fileUrl: "",
		kpop: "",
		name: "",
		courseName: "",
		memberNum: 0,
		lat: 0,
		lng: 0,
		placeNum: 0,
		placeType: 0,
		status: 0,
	},
	course: [],
	member:{
		memberNum : "",
		email : '',
		pwd : '',
		nickName : '',
		countryCode : '',
		age : 0,
		gender : '',
		pf_image: ''
	},
	idolSelected: true,
	attrSelected: false,
	concertSelected: false,
}

// 액션 추가 여기
export const CLICK_PLACE = 'CLICK_PLACE';
export const MODIFY_COURSE = 'MODIFY_COURSE';
export const SIDE_SET_IDOL = 'SIDE_SET_IDOL';
export const SIDE_SET_ATTR = 'SIDE_SET_ATTR';
export const SIDE_SET_CONCERT = 'SIDE_SET_CONCERT';
export const CLEAR_MEMBER = 'CLEAR_MEMBER';
export const PUSH_MEMBER = 'PUSH_MEMBER';

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
		default:
			return state;

	
	}
}