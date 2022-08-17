import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InfoForm from '../common/presentation/InfoForm';
import TypeButton from '../common/presentation/TypeButton';
import PlaceForm from '../common/presentation/PlaceForm';

function ManageCulture(){
    return(
        <div>
            <TypeButton goto="culture" label="문화 체험"/>
            <hr></hr>
            <Routes>
                <Route exact path="/" element={<InfoForm label="문화 체험"/> }></Route>
                <Route path="/place" element={<PlaceForm type="문화 체험" label="문화 체험 장소"/> }></Route>
            </Routes>           
        </div>

    );
}
export default ManageCulture;