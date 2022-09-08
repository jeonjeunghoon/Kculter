import axios from 'axios';
import {
	MODIFY_COURSE,
} from '../../../../redux/reducer';

export function handleOnClickAdd(place, courseList, setCourseList, dispatch) {
	if (!place.lat && !place.lng) {
		alert("Please select the place before add the course.");
		return;
	}
	console.log(place);
	if (courseList.length > 15) {
		alert("Too many courses.");
		return;
	}
	let newCourseList = [...courseList];
	newCourseList.push(place);
	setCourseList(() => newCourseList);
	dispatch({
		type: MODIFY_COURSE,
		data: newCourseList,
	})
}

export function handleOnClickSave(setModalIsOpen, courseList) {
	if (!courseList.length) {
		alert("Please add course before save the course list.");
		return;
	}
	setModalIsOpen(true);
}

export function handleOnSubmit(e, courseList, setCourseList, courseName, memberHash, setModalIsOpen, dispatch) {
	e.preventDefault();
	setModalIsOpen(false);
	if (!memberHash) {
		alert("Please login first");
		return ;
	}
	const jsonData = JSON.stringify({
		memberHash: memberHash,
		courseName: courseName,
		course: courseList,
	});
	axios.post('/course/', jsonData, {
		headers:{
			'Content-Type':'application/json'
		}
	})
		.then(function(res){
			const newCourseList = [];
			setCourseList(() => newCourseList);
			dispatch({
				type: MODIFY_COURSE,
				data: newCourseList,
			})
			setModalIsOpen(() => false);
			alert("코스 저장 완료!");
		})
		.catch(function(error){
			console.log(error, "서버 통신 실패");
			alert("코스 저장 실패");
	})
}