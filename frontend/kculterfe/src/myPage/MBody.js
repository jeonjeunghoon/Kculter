import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import './MBody.css';

function MBody() {
    return (
        <div id='my-body'>
            <Container>
                <div className="my-3 body-navbar">
                    <button href="#" className="px-5 body-navbtn">My map</button>
                    <button href="#" className="px-5 body-navbtn">Like list</button>
                </div>
                <Card className="mx-5 mb-3">
                    <Row>
                        <Col sm={2} className="bg-primary">
                            <div>
                                <p className="mx-2 py-2">
                                    01.<br />First day
                                </p>
                                <p className="mx-3 position-absolute bottom-0">
                                    + -
                                </p>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <Row className="mx-5">
                                <Col className="py-5">
                                    <Card className="body-card">
                                        <Card.Img variant="top" src="./logo192.png" style={{ height: '6em' }}/>
                                        <Card.Body className="body-card-body">
                                            <Card.Title className="text-center">
                                                World cup
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="py-5">
                                    <Card style={{ width: '6rem', height: '6rem' }}>
                                        BTS
                                    </Card>
                                </Col>
                                <Col className="py-5">
                                    <Card style={{ width: '6rem', height: '6rem' }}>
                                        HANBOK
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
                <Card className="mx-5">
                    <Row>
                        <Col sm={2} className="bg-primary">
                            <div>
                                <p className="mx-2 py-2">
                                    02.<br />Second day
                                </p>
                                <p className="mx-3 position-absolute bottom-0">
                                    + -
                                </p>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <Row className="mx-5">
                                <Col className="py-5">
                                    <Card style={{ width: '6rem', height: '6rem' }}>
                                        EXO
                                    </Card>
                                </Col>
                                <Col className="py-5">
                                    <Card style={{ width: '6rem', height: '6rem' }}>
                                        BTS
                                    </Card>
                                </Col>
                                <Col className="py-5">
                                    <Card style={{ width: '6rem', height: '6rem' }}>
                                        HANBOK
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default MBody;