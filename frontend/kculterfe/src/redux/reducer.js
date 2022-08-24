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
		memberNum : 1,
		email : 'hankgood95@naver.com',
		pwd : '1234',
		nickName : 'passcucci',
		countryCode : 'KR',
		age : 28,
		gender : 'male',
		pf_image: 'https://kculter-image.s3.ap-northeast-2.amazonaws.com/user.png'
	},
	idolSelected: true,
	attrSelected: false,
	concertSelected: false,
	dashboardSelected: true,
	settingSelected: false,
}

// 액션 추가 여기
export const CLICK_PLACE = 'CLICK_PLACE';
export const MODIFY_COURSE = 'MODIFY_COURSE';
export const SIDE_SET_IDOL = 'SIDE_SET_IDOL';
export const SIDE_SET_ATTR = 'SIDE_SET_ATTR';
export const SIDE_SET_CONCERT = 'SIDE_SET_CONCERT';
export const SIDE_SET_DASHBOARD = 'SIDE_SET_DASHBOARD';
export const SIDE_SET_SETTING = 'SIDE_SET_SETTING';

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
		default:
			return state;
	}
}