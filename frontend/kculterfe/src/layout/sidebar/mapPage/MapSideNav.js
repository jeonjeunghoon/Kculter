import React, {
	useState,
} from 'react';
import { useSelector } from 'react-redux';

import CourseCard from './CourseCard';


import './map-sidebar.css';

function MapSideNav() {
	const place = useSelector(state => state.place);

	const [courseList, setCourseList] = useState([])
	function handleOnClickBtn(place) {
		const isEmpty = Object.keys(place).length === 0;
		if (isEmpty) {
			return;
		} else {
			let newCourseList = [...courseList]
			const courseData = {
				title: place.title,
				fileUrl: place.fileUrl,
			}
	  	newCourseList.push(courseData)
	  	setCourseList(newCourseList)
		}
	}

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
    			  <button onClick={() => handleOnClickBtn(place)}>
    			    +
    			  </button>
    			</div>
				</div>
			</div>
		</div>
	);
}

export default MapSideNav;