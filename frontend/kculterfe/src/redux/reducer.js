// 데이터 추가는 여기에
const initState = {
	place: {},
	course: [],
}

// 액션 추가 여기
export const CLICK_MARKER = 'CLICK_MARKER';
export const MODIFY_COURSE = 'MODIFY_COURSE';

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
		default:
			return state;
	}
}