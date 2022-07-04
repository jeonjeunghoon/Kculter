import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Login from './login/LoginPage';
import MainPage from './main/MainPage';
import MapAPI from './map/MapAPI';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      	<Routes>
        	<Route path="/login" element={<Login/>}></Route>
			<Route path="/mapAPI" element={<MapAPI/>}></Route>
        	<Route path="/" element={<MainPage/>}></Route>
      	</Routes>
    </BrowserRouter>
  );
}

export default App;
