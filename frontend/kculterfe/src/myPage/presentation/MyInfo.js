import React, { useState } from 'react';
import BasicInfoPage from './myInfo/BasicInfoPage';
import PwdInfoPage from './myInfo/PwdInfoPage';

function MyInfo() {
  // 페이지 렌더링
  const [viewMyMap, setLikeList] = useState(true)
  const [btnPageColor, setBtnPageColor] = useState('blue')
  const [btnLikeColor, setBtnLikeColor] = useState('gray')

  return(
      <div id='my-body'>
          {/* 저장한 경로와 좋아요 리스트 선택 경로 네비 */}
          <div className="body-navbar">
              <button onClick={() => { setLikeList(true); setBtnLikeColor('gray'); setBtnPageColor('blue') }
              } style={{ color:btnPageColor }}>Edit Profile</button>
              <button onClick={() => { setLikeList(false); setBtnLikeColor('blue'); setBtnPageColor('gray') }
              } style={{ color:btnLikeColor }}>Security</button>
          </div>
          {/* 저장한 경로 리스트 */}
          { viewMyMap ? <BasicInfoPage/> : <PwdInfoPage/> }
      </div>
  )
}

export default MyInfo;