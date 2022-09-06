import React from 'react';
import MyPageBody from '../presentation/MyPageBody';
import MyInfo from '../presentation/MyInfo';
import { useSelector } from 'react-redux';

function MyPage() {
  const dashboardSelected = useSelector(state => state.dashboardSelected);
  const settingSelected = useSelector(state => state.settingSelected);

  if (dashboardSelected) {
    return (
      <>
        <MyPageBody />
      </>
    );	
  }
  else if (settingSelected) {
    return (
      <>
        <MyInfo />
      </>
    );		
  }							
}

export default MyPage;