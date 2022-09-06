import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/MyPage.css"
import "../../styles/Button.css"
import CardList from './CardList';
import { useDispatch } from 'react-redux';
import { MODIFY_COURSE } from '../../../redux/reducer';
import { CLICK_PLACE } from '../../../redux/reducer';
import { DeleteCourse } from '../../container/DeleteCourse';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';


function BoxCardItem({ props, dayNum }) {
    // Modal 상태 변수
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
		.then(() => {
			alert("Success on delete")
            setShow(false);
            window.location.reload(); // 여기 페이지 재 렌더링이 잘 안된다?
		})
		.catch(err => {
            alert("Can not delete")
            setShow(false);
            window.location.reload();
			console.log(err);
		});
    }

	return (
		<>
            <div className='box-card-item'>
                <div className='left'>
                    <div className="title">
                        { dayNum }.<br/>{ props.courseName }
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
                        <DeleteBtn onClick={handleShow}>
                            X
                        </DeleteBtn>
                    </div>
                    <CardList props={ props.course } />
                </div>
            </div>

            {/* 모달 창 */}
            <Modal className="text-center" show={show} onHide={handleClose}>
                <Modal.Header>
                    Delete course
                </Modal.Header>
                <Modal.Body className='m-5'>
                    Are you sure?
                </Modal.Body>
                <Modal.Footer>
                    <ConfirmBtn color={'pink'} onClick={DeleteCourseBtn}>
                        Delete
                    </ConfirmBtn>
                    <ConfirmBtn color={'blue'} onClick={handleClose}>
                        Cancel
                    </ConfirmBtn>
                </Modal.Footer>
            </Modal>
		</>
	);
}

export default BoxCardItem;

// css

const blue = '#1755d1';
const pink = '#f4029b';

const DeleteBtn = styled.button`
    border-radius: 50%;
    border: 0;
    background: white;
    color: gray;
`

const ConfirmBtn = styled.button`
    padding: 7px 20px;
    border: none;
    color: #fff;
    background-color: ${props => props.color == 'pink' ? pink : blue};
    border-radius: 10px;
    left: 73%;
    bottom: 2%;
`