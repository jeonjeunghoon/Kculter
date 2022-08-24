import axios from 'axios';
import {
	MODIFY_COURSE,
} from '../../../../redux/reducer';

export function handleOnClickAdd(place, courseList, setCourseList, dispatch) {
	const isEmpty = Object.keys(place).length === 0;
	if (isEmpty || courseList.find((item) => item.name === place.name ? true : false)) {
		alert("Please select the place before add the course.");
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
	const saveData = {
		memberNum: memberNum,
		courseName: courseName,
		course: courseList,
	}
	const jsonData = JSON.stringify({saveData});
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