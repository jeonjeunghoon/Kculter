import React from 'react';
import './concertPage.css';
import CardList from './components/card/CardList';
import { useSelector } from 'react-redux';

function concertPage() {
  const idolSelect = useSelector(state => state.idolSelected);
	const attrSelect = useSelector(state => state.attrSelected);
	const concertSelect = useSelector(state => state.concertSelected);

  if (idolSelect) {
    return (
      <div className='idolbody'>
        idol idol
      </div>
    );
  }
  else if (attrSelect) {
    return (
      <div className='idolbody'>
        attr attr
      </div>
    );
  }
  else if (concertSelect) {
    return (
      <div className="concertBody">
        <CardList></CardList>
      </div>
    );
  }
  return (
    <p>error</p>
  )
}

export default concertPage;
