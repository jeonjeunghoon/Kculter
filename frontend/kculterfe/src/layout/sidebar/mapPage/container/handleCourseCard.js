import { MODIFY_COURSE } from "../../../../redux/reducer";

export function handleOnClickDel(courseList, setCourseList, i, dispatch) {
	let newCourseList = [...courseList];
	newCourseList.splice(i, 1);
	setCourseList(() => newCourseList);	
	dispatch({
		type: MODIFY_COURSE,
		data: newCourseList,
	})
}