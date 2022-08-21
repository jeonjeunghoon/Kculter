import React from "react"
import { useDispatch } from "react-redux";
import { MODIFY_COURSE } from "../../../redux/reducer";
import "./map-sidebar.css";

function deleteCourse(courseList, setCourseList, i, dispatch) {
	let newCourseList = [...courseList];
	newCourseList.splice(i, 1);
	setCourseList(newCourseList);	
	dispatch({
		type: MODIFY_COURSE,
		data: newCourseList,
	})
}

function CourseCard (props) {
	const dispatch = useDispatch();

  return (
    <div>
      {props.courseList && props.courseList.map((item, i) => (
        <div className="course-card"
					key={i}
				>
					<img src={item.fileUrl}></img>
					<h6>{item.name}</h6>
					<button onClick={() => deleteCourse(props.courseList, props.setCourseList, i, dispatch)}>
						X
					</button>
        </div>
      ))}
    </div>
  )
}

export default CourseCard