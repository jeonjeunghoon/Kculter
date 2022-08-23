// 데이터 추가는 여기에
const initState = {
	place: {},
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
}

// 액션 추가 여기
export const CLICK_MARKER = 'CLICK_MARKER';
export const MODIFY_COURSE = 'MODIFY_COURSE';
export const SIDE_SET_IDOL = 'SIDE_SET_IDOL';
export const SIDE_SET_ATTR = 'SIDE_SET_ATTR';
export const SIDE_SET_CONCERT = 'SIDE_SET_CONCERT';

// reducer
export default function reducer(state = initState, action) {
	// 액션 분기점
	switch (action.type) {
		case CLICK_MARKER:
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
		default:
			return state;
	}
}