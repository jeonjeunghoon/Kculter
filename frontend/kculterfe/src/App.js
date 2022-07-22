import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
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
			<Route element={<Layout />}>
				<Route path="/MapPage" element={<MapPage/>}></Route>
        	</Route>
      	</Routes>
    </BrowserRouter>
  );
}

export default App;
