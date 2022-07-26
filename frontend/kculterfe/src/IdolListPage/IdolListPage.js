import React from 'react';
import './IdolListPage.css';
import IdolList from './Components/IdolList.js';

function IdolListPage() {
  return (
    <div className="body">
      <div className='IdolList'>
        <IdolList></IdolList>
      </div>
    </div>
  );
}

export default IdolListPage;