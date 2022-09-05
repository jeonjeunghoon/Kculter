import React, { useState } from 'react';
import BasicInfoPage from './myInfo/BasicInfoPage';
import PwdInfoPage from './myInfo/PwdInfoPage';
import MyPageNavbar from './common/MyPageNavbar';

function MyInfo() {
  const [viewInfo, setSecurity] = useState(true)

  return(
      <div id='my-body'>
          {/* 저장한 경로와 좋아요 리스트 선택 경로 네비 */}
          <MyPageNavbar setLikeList={setSecurity} firstPageName="Info" secondPageName="Security"/>
          {/* 저장한 경로 리스트 */}
          { viewInfo ? <BasicInfoPage/> : <PwdInfoPage/> }
      </div>
  )
}

export default MyInfo;