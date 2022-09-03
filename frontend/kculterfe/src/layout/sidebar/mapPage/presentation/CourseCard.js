import React from "react"
import {
	useDispatch
} from "react-redux";
import { CLICK_PLACE } from "../../../../redux/reducer";
import {
	handleOnClickDel
} from '../container/handleCourseCard';
import "../map-sidebar.css";

function handleOnClickCard(item, dispatch) {
	dispatch({
		type: CLICK_PLACE,
		data: item,
	})
}

function CourseCard (props) {
	const dispatch = useDispatch();

  return (
    <div>
      {props.courseList &&
			props.courseList.map((item, i) => (
        <div className="course-card"
					key={i}
					onClick={() => handleOnClickCard(item, dispatch)}
				>
					<img
						src={item.fileUrl}
						alt={"Course item"}
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