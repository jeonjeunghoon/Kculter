import React, { useState} from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../styles/MBody.css';
import BoxLikeList from './myLikeCard/BoxLikeList';
import BoxCardList from './myPageCard/BoxCardList';

function MyMapBody() {
    const [viewMyMap, setLikeList] = useState(true)

    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비*/}
            <Card className="mb-3 body-navbar">
                <Row>
                    <Col sm={2} className="px-0 text-center" id='my-body'>
                        <button onClick={() => setLikeList(true) } className="body-navbtn">My map</button>
                    </Col>
                    <Col sm={2} className="px-0 text-center" id='my-body'>
                        <button onClick={() => setLikeList(false) } className="body-navbtn">Like list</button>
                    </Col>
                </Row>
            </Card>
            {/* 저장한 경로 리스트 */}
            { viewMyMap ? <BoxCardList/> : <BoxLikeList/> }
        </div>
    )
}

export default MyMapBody;