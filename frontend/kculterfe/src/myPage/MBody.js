import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import './MBody.css';
import CardList from './card/CardList';

function MBody(props) {
    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비*/}
            <div className="my-3 body-navbar">
                <button href="#" className="px-5 body-navbtn">My map</button>
                <button href="#" className="px-5 body-navbtn">Like list</button>
            </div>
            {/* 저장한 경로 리스트 */}
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
                        <CardList />
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
    </div>
    )
}

export default MBody;