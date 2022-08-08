import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import "../../styles/Card.css"
import CardList from './CardList';

function BoxCardItem({ props }) {
	return (
		<>
            <Card className="mx-5 mb-3" style={{ width: '1200px'}}>
                <Row>
                    <Col xs={2} className="bg-primary">
                        <p className="mx-2 py-2 text-light">
                            { props.dayNum }<br/>{ props.dayStr }
                        </p>
                        <p className="mx-2 position-absolute bottom-0">
                            <Button variant="outline-danger btn-sm" className="btn border" style={{ width: '2em' }}>
                                <span className="text-white">
                                    +
                                </span>
                            </Button>
                            <Button variant="outline-danger btn-sm" className="btn border" style={{ width: '2em' }}>
                                <span className="text-white">
                                    -
                                </span>
                            </Button>
                        </p>
                    </Col>
                    <Col xs={10}>
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