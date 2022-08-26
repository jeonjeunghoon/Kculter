import React from 'react';
import MyPageBody from '../components/MyPageBody';
import MyInfoPage from '../components/MyInfoPage';
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
        <MyInfoPage />
      </>
    );		
  }							
}

export default MyPage;