import React, {
	useState,
} from 'react';
import { useSelector } from 'react-redux';
import CourseForm from './CourseForm';
import CourseListView from './CourseListView';

function MapSideNav() {
	const place = useSelector(state => state.place);
	const markerClick = useSelector(state => state.markerClick);
	console.log(markerClick);
	const [courseList, setCourseList] = useState([]);
	const [courseId, setCourseId] = useState(0);
	const handleOnCreate = (courseInfo) => {
		setCourseList(courseList.concat({ id: courseId, place: courseInfo.place }));
		setCourseId(course => course + 1);
	}

	return (
		<div className="sidebar">
			<CourseForm onCreate={(courseInfo) => handleOnCreate(courseInfo)} />
				<CourseListView courseList={courseList} />
			<p>{markerClick.title}</p>
			<img src={markerClick.fileUrl}></img>
		</div>
	);
}

export default MapSideNav;