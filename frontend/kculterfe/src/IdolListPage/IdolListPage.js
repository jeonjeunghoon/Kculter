import React from 'react';
import './IdolListPage.css';
import IdolList from './Components/IdolList.js';
import CultureList from './Components/CultureList';
import ConcertPage from '../concertPage/concertPage';
import { useSelector } from 'react-redux';

function IdolListPage() {
  const idolSelect = useSelector(state => state.idolSelected);
	const attrSelect = useSelector(state => state.attrSelected);
	const concertSelect = useSelector(state => state.concertSelected);

  if (idolSelect) {
    return (
      <div className="body">
        <div className='IdolList'>
          <IdolList />
        </div>
      </div>
    );
  }
  else if (attrSelect) {
    return (
      <div className="body">
        <div className='IdolList'>
          <CultureList />
        </div>
      </div>
    );
  }
  else if (concertSelect) {
    return (
      <ConcertPage/>
    );
  }
  return (
    <p>error</p>
  )
}

export default IdolListPage;