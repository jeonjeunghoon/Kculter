import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './MBody.css';

function MBody() {
    return (
        <div className='my-body'>
            <Container className="mx-6">
                <Card className="mx-5 my-3 border-0 border-bottom bg-light">
                    My map Like list
                </Card>
                <Card className="mx-5 mb-3">
                    <Row>
                        <Col sm={2}>
                            <div class="bg-primary" style={{ height: '13rem' }}>
                                <p className="mx-3 py-2">
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
                <Card className="mx-5">
                    <Row>
                        <Col sm={2}>
                            <div class="bg-primary" style={{ height: '13rem' }}>
                                <p className="mx-3 py-2">
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