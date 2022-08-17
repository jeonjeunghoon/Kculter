const initState = {
	place: {},
}

export const MAP_PLACE = 'MAP_PLACE';

export default function reducer(state = initState, action) {
	switch (action.type) {
		case MAP_PLACE:
			console.log(action.data);
			return {
				...state,
				place: action.data,
			}
		default:
			return state;
	}
}