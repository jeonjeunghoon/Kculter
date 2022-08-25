import React from 'react';
import './concertPage.css';
import CardList from './components/ConcertList';

function concertPage() {

  return (
    <div className="concertBody">
      <CardList></CardList>
    </div>
  );
}

export default concertPage;
