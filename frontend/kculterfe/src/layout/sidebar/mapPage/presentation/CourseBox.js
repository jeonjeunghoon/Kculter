import React, {
	useEffect,
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
	const memberHash = window.sessionStorage.getItem("memberHash");
	const dispatch = useDispatch();
	const reduxCourseList = useSelector(state => state.course);
	const [courseList, setCourseList] = useState([])
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [courseName, setCourseName] = useState("");

	useEffect(() => {
		setCourseList(() => reduxCourseList);
	}, [courseList]);

	return (
		<div className="course">
			<h5>Course</h5>
      <CourseCard className='course-list'
				courseList={courseList}
				setCourseList={setCourseList}
			/>
			<div className="course-button">
      	<button
					onClick={() => handleOnClickAdd(place, courseList, setCourseList, dispatch)}
				>
      	  ADD
      	</button>
				{
					courseList.length > 0 &&
					<button
						onClick={() => handleOnClickSave(setModalIsOpen, courseList)}
					>
      		  SAVE TO BACK
      		</button>
				}
			</div>
				<Modal
					isOpen={modalIsOpen}
					ariaHideApp={false}
				>
					<form 
						onSubmit={e => handleOnSubmit(e, courseList, setCourseList, courseName, memberHash, setModalIsOpen, dispatch)}
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
						<button
							onClick={() => {
								setModalIsOpen(false);
							}}
						>
							EXIT
						</button>
					</form>
				</Modal>
    </div>
	);
}

export default CourseBox;