import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/MyPage.css"
import "../../styles/Button.css"
import CardList from './CardList';
import { useDispatch } from 'react-redux';
import { MODIFY_COURSE } from '../../../redux/reducer';
import { CLICK_PLACE } from '../../../redux/reducer';
import { DeleteCourse } from '../../container/DeleteCourse';

function BoxCardItem({ props }) {
	const dispatch = useDispatch();

    const courseMoveToMapBtn = () => {
        let newCourseList = props.course;
        let place = props

        dispatch({
            type: MODIFY_COURSE,
            data: newCourseList
        })
        dispatch({
            type: CLICK_PLACE,
            data: place
        })
    }

    const DeleteCourseBtn = () => {
        DeleteCourse(props.courseHash)
		.then(res => {
            console.log(res);
			alert("Success on delete")
		})
		.catch(err => {
            alert("Can not delete")
			console.log(err);
		});
    }

	return (
		<>
            <div className='box-card-item'>
                <div className='left'>
                    <div className="title">
                        { props.courseNum }.<br/>{ props.courseName }
                    </div>
                    <div className="box-btn">
                        <Link className="" to='/MapPage'>
                            <button className="btn" onClick={courseMoveToMapBtn}>
                                Modification
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='right'>
                    <div className="delete-btn">
                        <button onClick={DeleteCourseBtn}>
                            X
                        </button>
                    </div>
                    <CardList props={ props.course } />
                </div>
            </div>
		</>
	);
}

export default BoxCardItem;