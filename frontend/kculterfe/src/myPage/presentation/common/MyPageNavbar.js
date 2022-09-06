import React, { useState } from 'react';
import styled from 'styled-components';

function MyPageNavbar( props ) {
    const [firstPage, setFirstPage] = useState(true)
    const [secondPage, setSecondPage] = useState(false)

    return (
        <>
            <BodyNavbar>
                <NavBtn select={firstPage} onClick={() => {props.setLikeList(true); setFirstPage(true); setSecondPage(false)}}>{props.firstPageName}</NavBtn>
                <NavBtn select={secondPage} onClick={() => {props.setLikeList(false); setFirstPage(false); setSecondPage(true)}}>{props.secondPageName}</NavBtn>
            </BodyNavbar>
        </>
    )
}

// css
const blue = '#3172F6';

const BodyNavbar = styled.div`
    @media all and (min-width:768px) {
        font-size: 1.5rem;
        background-color: #eeeeee;
        border-bottom: 1px solid rgba(128, 128, 128, 0.401);
        margin-left: 4rem;
        margin-right: 4rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media all and (max-width:767px) {
        font-size: 1rem;
        background-color: #eeeeee;
        border-bottom: 1px solid rgba(128, 128, 128, 0.401);
        margin-left: 3rem;
        margin-right: 3rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }
`

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

export default MyPageNavbar;