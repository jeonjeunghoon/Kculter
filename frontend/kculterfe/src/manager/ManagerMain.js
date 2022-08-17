import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import ManageKpop from './kpop/ManageKpop';
import ManageCulture from './culture/ManageCulture';
import ConcertForm from './concert/presentation/ConcertForm';

function ManagerMain(){
    return(
        <div style={{border:"1px solid black"}}>
            <NavBar/>
            <Routes>
                <Route path="/kpop/*" element={<ManageKpop/>}></Route>
                <Route path="/culture/*" element={<ManageCulture/>}></Route>
                <Route path="/concert" element={<ConcertForm label="콘서트"/>}></Route>
            </Routes>
        </div>
    );
}
export default ManagerMain;