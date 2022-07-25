import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import ManageKpop from './kpop/ManageKpop';
import ManageCulture from './culture/ManageCulture';

function ManagerMain(){
    return(
        <div style={{border:"1px solid black"}}>
            <NavBar/>
            <Routes>
                <Route path="/kpop" element={<ManageKpop/>}></Route>
                <Route path="/culture" element={<ManageCulture/>}></Route>
            </Routes>
        </div>
    );
}
export default ManagerMain;