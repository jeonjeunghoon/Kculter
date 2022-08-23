import React, {
	useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './CourseCard';
import {
	handleOnClickAdd,
	handleOnClickSave
} from '../container/handleMapSideNav';
import '../map-sidebar.css';

function MapSideNav() {
	const place = useSelector(state => state.place);
	const memberNum = useSelector(state => state.member.memberNum);
	const [courseName, setCourseName] = useState("");
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
						<h3>{place.name}</h3>
						<p>{place.address}</p>
					</div>
					<p>{place.explain}</p>
					<div className="course">
					<p>Save Your Course</p>
    			  <CourseCard courseList={courseList} setCourseList={setCourseList} />
    			  <button onClick={() => handleOnClickAdd(place, memberNum, courseName, courseList, setCourseList, dispatch)}>
    			    ADD
    			  </button>
						<button onClick={() => handleOnClickSave(courseList, setCourseList, dispatch)}>
    			    SAVE TO BACK
    			  </button>
    			</div>
				</div>
			</div>
		</div>
	);
}

export default MapSideNav;