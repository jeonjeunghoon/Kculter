import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "../../styles/Card.css"
import CardList from './CardList';

function BoxCardItem({ props }) {
	return (
		<>
            <Card className="mx-5 mb-3">
                <Row>
                    <Col sm={2} className="bg-primary">
                        <p className="mx-2 py-2">
                            { props.dayNum }<br />{ props.dayStr }
                        </p>
                        <p className="mx-3 position-absolute bottom-0">
                            + -
                        </p>
                    </Col>
                    <CardList props={ props.card } />
                </Row>
            </Card>
		</>
	);
}

export default BoxCardItem;