import React from 'react';
import {
	BrowserRouter,Routes,
	Route
} from 'react-router-dom';
import Login from './login/presentation/LoginPage';
import MainPage from './main/MainPage';
import SignUpPage from './signup/SignUpPage';
import MyPage from './myPage/page/MyPage';
import MapPage from './map/MapPage';
import Layout from './layout/Layout';
import IdolListPage from './IdolListPage/IdolListPage';
import ManagerMain from './manager/ManagerMain';
import NotFound from './notfound/NotFound';
import ForgotPwd from './login/presentation/ForgotPwd';
import ManagerRoute from './privateRoute/ManagerRoute';
import PrivateRoute from './privateRoute/PrivateRoute';
function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/manager/*" element={<ManagerRoute component={<ManagerMain/>}/>}>
					<Route path="/manager/*" element={<ManagerMain/>}></Route>
				</Route> {/*manager 파일안에 중첩라우팅을 넣었습니다.*/}
				<Route path="/" element={<MainPage/>}></Route>
				<Route path="/login" element={<Login/>}/>
				<Route path="/login/forgotpwd" element={<ForgotPwd/>}/>
				<Route path="/signup" element={<SignUpPage/>}/>	
				<Route element={<Layout />}> {/* 중첩 라우팅입니다. 레이아웃(헤더와 사이드네비)로 감싸는 컴포넌트(메인페이지를 제외한 모든 페이지)는 이 사이에 넣어주세요 */}
					<Route path="/MapPage" element={<MapPage />} />
					<Route path="/MyPage" element={<PrivateRoute component={<MyPage/>}/>}>
						<Route path="/MyPage" element={<MyPage/>}/>
					</Route>
					<Route path="/IdolListPage" element={<IdolListPage/>}/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
