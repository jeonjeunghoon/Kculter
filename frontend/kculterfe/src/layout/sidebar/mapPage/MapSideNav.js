import React, {
	useState,
} from 'react';
import { useSelector } from 'react-redux';
import CourseForm from './CourseForm';
import CourseListView from './CourseListView';

function MapSideNav() {
	const place = useSelector(state => state.place);

	const [courseList, setCourseList] = useState([]);
	const [courseId, setCourseId] = useState(0);
	const handleOnCreate = (courseInfo) => {
		setCourseList(courseList.concat({ id: courseId, place: courseInfo.place }));
		setCourseId(course => course + 1);
	}

	return (
		// JSON.stringify(place) !== '{}'
		// 	?
		// 	<div className="sidebar">
		// 		<CourseForm onCreate={(courseInfo) => handleOnCreate(courseInfo)} />
		// 		<CourseListView courseList={courseList} />
		// 	</div>
		// 	:
			<div className="sidebar">
				<CourseForm onCreate={(courseInfo) => handleOnCreate(courseInfo)} />
				<CourseListView courseList={courseList} />

				<div style={{color:"white"}}>
				<p>{place.formatted_address}</p>
				</div>
				{/* <img src={place.photos[0].getUrl()}></img> */}
			</div>
	);
}

export default MapSideNav;