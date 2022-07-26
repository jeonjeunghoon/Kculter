import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import './MBody.css';
import CardList from './card/CardList';
import BoxCardList from './card/BoxCardList';

function MBody(props) {
    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비*/}
            <div className="my-3 body-navbar">
                <button href="#" className="px-5 body-navbtn">My map</button>
                <button href="#" className="px-5 body-navbtn">Like list</button>
            </div>
            {/* 저장한 경로 리스트 */}
            <BoxCardList/>
    </div>
    )
}

export default MBody;