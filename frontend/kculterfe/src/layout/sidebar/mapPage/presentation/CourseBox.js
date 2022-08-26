import React, {
	useState,
} from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import Modal from 'react-modal';
import CourseCard from './CourseCard';
import {
	handleOnClickAdd,
	handleOnClickSave,
	handleOnSubmit,
} from '../container/handleMapSideNav';

function CourseBox({ place }) {
	const memberNum = window.sessionStorage.getItem("memberNum");
	const dispatch = useDispatch();
	const [courseList, setCourseList] = useState([])
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [courseName, setCourseName] = useState("");

	return (
		<div className="course">
			<h5>Course</h5>
      <CourseCard className='course-list'
				courseList={courseList}
				setCourseList={setCourseList}
			/>
      <button
				onClick={() => handleOnClickAdd(place, courseList, setCourseList, dispatch)}
			>
        ADD
      </button>
			<button
				onClick={() => handleOnClickSave(setModalIsOpen, courseList)}
			>
        SAVE TO BACK
      </button>
				<Modal
					isOpen={modalIsOpen}
					ariaHideApp={false}
				>
					<form 
						onSubmit={e => handleOnSubmit(e, courseList, setCourseList, courseName, memberNum, setModalIsOpen, dispatch)}
					>
						<input
						type="text"
						value={courseName}
						placeholder="Enter Course name"
						onChange={e => setCourseName(e.target.value)}
						/>
						<button
							type="submit"
						>
							SUBMIT
						</button>
					</form>
				</Modal>
    </div>
	);
}

export default CourseBox;