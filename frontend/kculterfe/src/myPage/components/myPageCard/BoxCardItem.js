import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "../../styles/MyPage.css"
import "../../styles/Button.css"
import CardList from './CardList';

function BoxCardItem({ props }) {
	return (
		<>
            <div className='box-card-item'>
                <div className='left'>
                    <div className="title">
                        { props.courseNum }.<br/>{ props.courseName }
                    </div>
                    <div className="box-btn">
                        <button className="btn" onclike="">
                            Modification
                        </button>
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