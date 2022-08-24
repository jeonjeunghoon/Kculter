import axios from 'axios';
import {
	MODIFY_COURSE,
} from '../../../../redux/reducer';

export function handleOnClickAdd(place, courseList, setCourseList, dispatch) {
	if (place.lat === 0 && place.lng === 0) {
		alert("Please select the place before add the course.");
		return;
	}
	if (courseList.length >= 20) {
		alert("Too many courses.");
		return;
	}
	let newCourseList = [...courseList];
	newCourseList.push(place);
	setCourseList(newCourseList);
	dispatch({
		type: MODIFY_COURSE,
		data: newCourseList,
	})
}

export function handleOnClickSave(courseList, setCourseList, memberNum, courseName, dispatch) {
	if (!courseList.length) {
		alert("Please add course before save the course list.");
		return;
	}
	const jsonData = JSON.stringify({
		memberNum: memberNum,
		courseName: courseName,
		course: courseList,
	});
	console.log(jsonData);
	axios.post('/course/', jsonData, {
		headers:{
			'Content-Type':'application/json'
		}
	})
		.then(function(res){
			console.log(res, '통신 완료');
			const newCourseList = [];
			setCourseList(newCourseList);
			dispatch({
				type: MODIFY_COURSE,
				data: newCourseList,
			})
  	})
  	.catch(function(error){
			console.log(error, "서버 통신 실패");
  })
}