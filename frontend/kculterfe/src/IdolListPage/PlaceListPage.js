import React from 'react';
import './IdolListPage.css';
import IdolList from './Components/IdolList.js';
import PlaceList from './Components/PlaceList';

function PlaceListPage() {

  return (
    <div className="body">
      <div className='IdolList'>
        <PlaceList />
      </div>
    </div>
  );
}

export default PlaceListPage;