import React, { useState } from 'react';
import BoxLikeList from './myLikeCard/BoxLikeList';
import BoxCardList from './myPageCard/BoxCardList';
import MyPageNavbar from './common/MyPageNavbar';

function MyPageBody() {
    const [viewMyMap, setLikeList] = useState(true)
    
    return (
        <div id='my-body'>
            {/* 저장한 경로와 좋아요 리스트 선택 경로 네비 */}
            <MyPageNavbar setLikeList={setLikeList} firstPageName="My map" secondPageName="Like list"/>
            {/* 저장한 경로 리스트 */}
            { viewMyMap ? <BoxCardList/> : <BoxLikeList/> }
        </div>
    )
}

export default MyPageBody;