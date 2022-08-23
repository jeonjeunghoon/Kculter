import React, { useState } from 'react';
import '../styles/MainNavbar.css';
import BoxLikeList from './myLikeCard/BoxLikeList';
import BoxCardList from './myPageCard/BoxCardList';

function MyPageBody() {
    const [viewMyMap, setLikeList] = useState(true)
    const [btnPageColor, setBtnPageColor] = useState('blue')
    const [btnLikeColor, setBtnLikeColor] = useState('gray')

    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비 */}
            <div className="body-navbar">
                <button onClick={() => {setLikeList(true); setBtnLikeColor('gray'); setBtnPageColor('blue')}
                } style={{ color:btnPageColor }}>My map</button>
                <button onClick={() => {setLikeList(false); setBtnLikeColor('blue'); setBtnPageColor('gray')}
                } style={{ color:btnLikeColor }}>Like list</button>
            </div>
            {/* 저장한 경로 리스트 */}
            { viewMyMap ? <BoxCardList/> : <BoxLikeList/> }
        </div>
    )
}

export default MyPageBody;