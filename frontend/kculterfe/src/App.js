import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Login from './login/LoginPage';
import MainPage from './main/MainPage';
import GoogleMap from './map/googleMap';

function App() {
	const gps = [{lat: 37.3379297, lng: 127.9269225}]; // MAP에 필요한 gps
  return (
    <BrowserRouter>
      <NavBar/>
      	<Routes>
        	<Route path="/login" element={<Login/>}></Route>
			<Route path="/googleMap" element={<GoogleMap locations={gps}></GoogleMap>}></Route>
        	<Route path="/" element={<MainPage/>}></Route>
      	</Routes>
    </BrowserRouter>
  );
}

export default App;
