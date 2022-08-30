import React from "react"
import { useDispatch } from "react-redux";
import {
	handleOnClickDel
} from '../container/handleCourseCard';
import "../map-sidebar.css";

function CourseCard (props) {
	const dispatch = useDispatch();

  return (
    <div>
      {props.courseList &&
			props.courseList.map((item, i) => (
        <div className="course-card"
					key={i}
				>
					<img
						src={item.fileUrl}
					/>
					<p>
						{item.name}
					</p>
					<button
						onClick={() => handleOnClickDel(props.courseList, props.setCourseList, i, dispatch)}
						id = "close-course">
							<span id = "x-span">X</span>
					</button>
        </div>
      ))}
    </div>
  )
}

export default CourseCard