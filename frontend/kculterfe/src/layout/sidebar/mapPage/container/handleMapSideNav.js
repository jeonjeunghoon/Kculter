import axios from 'axios';
import {
	MODIFY_COURSE,
} from '../../../../redux/reducer';

import { useSelector } from 'react-redux';

export function handleOnClickAdd(place, courseList, setCourseList, dispatch) {
	const isEmpty = Object.keys(place).length === 0;
	if (isEmpty || courseList.find((item) => item.name === place.name ? true : false)) {
		alert("Please select the place before add the course.");
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

export function handleOnClickSave(course, setCourseList, dispatch) {
	if (!course.length) {
		alert("Please add course before save the course list.");
		return;
	}
	const json = JSON.stringify({course});
	axios.post('/course/', json, {
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