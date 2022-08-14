import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import "../../styles/MyPageCard.css"
import "../../styles/Button.css"
import CardList from './CardList';

function BoxCardItem({ props }) {
	return (
		<>
            <Card className="box-card">
                <Row>
                    <Col md={2} className="bg-primary box-card-top">
                        <p className="mx-2 py-2 text-light">
                            { props.dayNum }<br/>{ props.dayStr }
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
                                { props.date }
                            </span>
                        </div>
                        <CardList props={ props.card } />
                    </Col>
                </Row>
            </Card>
		</>
	);
}

export default BoxCardItem;