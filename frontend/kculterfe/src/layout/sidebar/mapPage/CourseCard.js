import React from "react"
import "./map-sidebar.css";

function deleteCourse(courseList, setCourseList, i) {
	let newCourseList = [...courseList];
	newCourseList.splice(i, 1);
	setCourseList(newCourseList);	
}

function CourseCard (props) {
  return (
    <div>
      {props.courseList && props.courseList.map((item, i) => (
        <div className="course-card"
					key={i}
				>
					<img src={item.fileUrl}></img>
					<h6>{item.title}</h6>
					<button onClick={() => deleteCourse(props.courseList, props.setCourseList, i)}>
						X
					</button>
        </div>
      ))}
    </div>
  )
}

export default CourseCard