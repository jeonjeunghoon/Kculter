import React from 'react';
import CourseInfo from './CourseInfo';

function CourseListView({ courseList = [] }) {
	return (
		<div>
			{courseList.map(course => (<CourseInfo key={course.id} info={course} />))}
		</div>
	);
}

export default CourseListView;