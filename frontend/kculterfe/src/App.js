import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar'; //이건 무슨 네브바? 
import Login from './login/LoginPage';
import MainPage from './main/MainPage';
import SignUpPage from './signup/SignUpPage';
import MapPage from './map/MapPage';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      	<Routes>
        	<Route path="/" element={<MainPage/>}></Route>
			<Route path="/login" element={<Login/>}></Route>
        	<Route path="/signup" element={<SignUpPage/>}/>

			<Route element={<Layout />}> {/* 중첩 라우팅입니다. 레이아웃(헤더와 사이드네비)로 감싸는 컴포넌트(메인페이지를 제외한 모든 페이지)는 이 사이에 넣어주세요 */}
				<Route path="/MapPage" element={<MapPage/>}></Route>
        	</Route>
      	</Routes>
    </BrowserRouter>
  );
}

export default App;
