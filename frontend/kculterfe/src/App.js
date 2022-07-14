import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Login from './login/LoginPage';
import MainPage from './main/MainPage';
import MapPage from './map/MapPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      	<Routes>
        	<Route path="/login" element={<Login/>}></Route>
			<Route path="/MapPage" element={<MapPage/>}></Route>
        	<Route path="/" element={<MainPage/>}></Route>
      	</Routes>
    </BrowserRouter>
  );
}

export default App;
