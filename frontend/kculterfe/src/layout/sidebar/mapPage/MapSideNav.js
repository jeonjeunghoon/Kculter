import React, {
	useState,
} from 'react';
import { MODIFY_COURSE } from '../../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './CourseCard';
import './map-sidebar.css';
import axios from 'axios';

function handleOnClickAdd(place, courseList, setCourseList, dispatch) {
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

function handleOnClickSave(courseList) {
	// axios.get('/near/stay')
	// 	.then(function(res){
	// 		console.log(res, '통신 완료');
  // 	})
  // 	.catch(function(error){
	// 		console.log(error, "서버 통신 실패");
  // })
}

function MapSideNav() {
	const place = useSelector(state => state.place);
	const [courseList, setCourseList] = useState([])
	const dispatch = useDispatch();

	return (
		<div className="sidebar">
			<div className="map-sidebar">
				<div className="head">
					{/* <img src={}></img> */}
					<h3>{place.head}</h3>
				</div>
				<img src={place.fileUrl}></img>
				<div className="content">
					<div className="title">
						<h3>{place.title}</h3>
						<p>{place.address}</p>
					</div>
					<p>{place.explain}</p>
					<div className="course">
					<p>Save Your Course</p>
    			  <CourseCard courseList={courseList} setCourseList={setCourseList} />
    			  <button onClick={() => handleOnClickAdd(place, courseList, setCourseList, dispatch)}>
    			    ADD
    			  </button>
						<button onClick={() => handleOnClickSave(courseList)}>
    			    SAVE TO BACK
    			  </button>
    			</div>
				</div>
			</div>
		</div>
	);
}

export default MapSideNav;