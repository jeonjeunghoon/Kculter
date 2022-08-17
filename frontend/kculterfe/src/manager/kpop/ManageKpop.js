import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InfoForm from '../common/presentation/InfoForm';
import TypeButton from '../common/presentation/TypeButton';
import PlaceForm from '../common/presentation/PlaceForm';

function ManageKpop(){

    return(
        <div>
            <TypeButton goto="kpop" label="Kpop"/>
            <hr></hr>
            <Routes>
                <Route exact path="/" element={<InfoForm label="Kpop"/> }></Route>
                <Route path="/place" element={<PlaceForm type="Kpop 스타"label="Kpop 장소"/> }></Route>
            </Routes>  
        </div>
    );
}
export default ManageKpop;