import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "../../styles/MyPageCard.css"
import "../../styles/Button.css"
import CardList from './CardList';

function BoxCardItem({ props, data }) {
	return (
		<>
            <div className='box-card-item'>
                <div className='left'>
                    <p className="title">
                        { props.placeNum }.<br/>{ props.address }
                    </p>
                    <p className="box-btn">
                        <button className="btn" onclike="">
                            Modification
                        </button>
                        <button className="btn" onclike="">
                            Delete
                        </button>
                    </p>
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
            {/* <Card className="box-card">
                <Row>
                    <Col md={2} className="bg-primary box-card-top">
                        <p className="mx-2 py-2 text-light">
                            { props.placeNum }.<br/>{ props.address }
                        </p>
                        <p className="box-btn">
                            <button className="btn" onclike="">
                                +
                            </button>
                            <button className="btn" onclike="">
                                -
                            </button>
                        </p>
                    </Col>
                    <Col md={10} className="">
                        <div className="date">
                            <span className="date-span">
                                { props.lat }
                            </span>
                        </div>
                        <CardList props={ props } />
                    </Col>
                </Row>
            </Card> */}
		</>
	);
}

export default BoxCardItem;