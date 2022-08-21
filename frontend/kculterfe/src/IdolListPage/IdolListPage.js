import React from 'react';
import './IdolListPage.css';
import IdolList from './Components/IdolList.js';
import PlaceList from './Components/PlaceList';

function IdolListPage() {

  return (
    <div className="body">
      <div className='IdolList'>
        <IdolList />
        <PlaceList />
      </div>
    </div>
  );
}

export default IdolListPage;