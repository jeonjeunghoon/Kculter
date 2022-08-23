import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "../../styles/MyPage.css"
import "../../styles/Button.css"
import CardList from './CardList';

function BoxCardItem({ props, data }) {
	return (
		<>
            <div className='box-card-item'>
                <div className='left'>
                    <div className="title">
                        { props.placeNum }.<br/>{ props.address }
                    </div>
                    <div className="box-btn">
                        <button className="btn" onclike="">
                            Modification
                        </button>
                        <button className="btn" onclike="">
                            Delete
                        </button>
                    </div>
                </div>
                <div className='right'>
                    <div className="date">
                        <span className="date-span">
                            { props.lat }
                        </span>
                    </div>
                    <CardList props={ props } data={ data } />
                </div>
            </div>
		</>
	);
}

export default BoxCardItem;