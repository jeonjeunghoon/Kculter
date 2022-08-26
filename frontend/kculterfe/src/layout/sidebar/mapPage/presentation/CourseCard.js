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
				<div className='course-card-outter'
					key={i}
				>
        	<div className="course-card"
						key={i}
					>
						<img
							src={item.fileUrl}
						/>
						<h6>
							{item.name}
						</h6>
						<button
							onClick={() => handleOnClickDel(props.courseList, props.setCourseList, i, dispatch)}
						>
						</button>
        	</div>
				</div>
      ))}
    </div>
  )
}

export default CourseCard