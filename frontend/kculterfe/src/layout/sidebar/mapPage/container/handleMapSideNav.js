import axios from 'axios';
import { MODIFY_COURSE } from '../../../../redux/reducer';

export function handleOnClickAdd(place, courseList, setCourseList, dispatch) {
	const isEmpty = Object.keys(place).length === 0;

	if (isEmpty) {
		return;
	} else if (courseList.find((item) => item.name === place.name ? true : false)) {
		return;
	}
	let newCourseList = [...courseList];
	const courseData = place;
	newCourseList.push(courseData);
	setCourseList(newCourseList);
	dispatch({
		type: MODIFY_COURSE,
		data: newCourseList,
	})
}

export function handleOnClickSave(course) {
	const json = JSON.stringify({course});
	console.log(json);
	axios.post('/course/', json, {
		headers:{
			'Content-Type':'application/json'
		}
	})
		.then(function(res){
			console.log(res, '통신 완료');
  	})
  	.catch(function(error){
			console.log(error, "서버 통신 실패");
  })
}