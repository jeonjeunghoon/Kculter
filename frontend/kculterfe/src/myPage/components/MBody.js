import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../styles/MBody.css';
import BoxCardList from './card/BoxCardList';

function MBody() {
    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비*/}
            <Card className="mb-3 body-navbar">
                <Row>
                    <Col sm={2} className="px-0 text-center" id='my-body'>
                        <button href="#" className="body-navbtn">My map</button>
                    </Col>
                    <Col sm={2} className="px-0 text-center" id='my-body'>
                        <button href="#" className="body-navbtn">Like list</button>
                    </Col>
                </Row>
            </Card>
            {/* 저장한 경로 리스트 */}
            <BoxCardList/>
        </div>
    )
}

export default MBody;