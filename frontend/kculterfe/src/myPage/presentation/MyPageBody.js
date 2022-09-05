import React, { useState } from 'react';
import '../styles/MyPageNav.css';
import BoxLikeList from './myLikeCard/BoxLikeList';
import BoxCardList from './myPageCard/BoxCardList';
import styled from 'styled-components';

function MyPageBody() {
    const [viewMyMap, setLikeList] = useState(true)
    const [myPage, setMyPage] = useState(true)
    const [likePage, setLikePage] = useState(false)

    console.log("메인 바디");
    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비 */}
            <div className="body-navbar">
                <NavBtn select={myPage} onClick={() => {setLikeList(true); setMyPage(true); setLikePage(false)}}>My map</NavBtn>
                <NavBtn select={likePage} onClick={() => {setLikeList(false); setMyPage(false); setLikePage(true)}}>Like list</NavBtn>
            </div>
            {/* 저장한 경로 리스트 */}
            { viewMyMap ? <BoxCardList/> : <BoxLikeList/> }
        </div>
    )
}

// css
const blue = '#3172F6';

const NavBtn = styled.button`
    margin-right: 2rem;
    margin-left: 2rem;
    border: 0px;
    ${props => {
        if (props.select === true) {
            return`
            color: ${blue};
            border-bottom: 8px solid ${blue};
            `
        }
        else {
            return`
            color: gray;
            `
    }
    }};
`

export default MyPageBody;