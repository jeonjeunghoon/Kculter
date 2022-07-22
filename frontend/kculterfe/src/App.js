import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar'; //이건 무슨 네브바? 
import Login from './login/LoginPage';
import MainPage from './main/MainPage';
import MapPage from './map/MapPage';
import SignUpPage from './signup/SignUpPage';
import MyPage from './myPage/MyPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      	<Routes>
          <Route exact={true} path="/" element={<MainPage/>}></Route>
        	<Route path="/login" element={<Login/>}></Route>
			    <Route path="/MapPage" element={<MapPage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
      	</Routes>
    </BrowserRouter>
  );
}

export default App;
