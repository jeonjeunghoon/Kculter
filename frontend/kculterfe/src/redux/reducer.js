// 데이터 추가는 여기에
const initState = {
	place: {},
	markerClick: {},
}

// 액션 추가 여기
export const MAP_PLACE = 'MAP_PLACE';
export const CLICK_MARKER = 'CLICK_MARKER';

// reducer
export default function reducer(state = initState, action) {
	// 액션 분기점
	switch (action.type) {
		case MAP_PLACE:
			console.log(action.data);
			return {
				...state,
				place: action.data,
			}
		case CLICK_MARKER:
			console.log(action.data);
			return {
				...state,
				markerClick: action.data,
			}
		default:
			return state;
	}
}