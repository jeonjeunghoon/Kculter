import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/MyPage.css"
import "../../styles/Button.css"
import CardList from './CardList';
import { useDispatch } from 'react-redux';
import { MODIFY_COURSE } from '../../../redux/reducer';

function BoxCardItem({ props }) {
	const dispatch = useDispatch();

    const courseMoveToMapBtn = () => {
        let newCourseList = props.course;
        dispatch({
            type: MODIFY_COURSE,
            data: newCourseList,
        })
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
                    <div className="date">
                        <span className="date-span">
                            { props.courseNum }
                        </span>
                    </div>
                    <CardList props={ props.course } />
                </div>
            </div>
		</>
	);
}

export default BoxCardItem;