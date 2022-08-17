import React from 'react';
import './concertPage.css';
import CardList from './components/card/CardList';

function concertPage() {
  return (
    <div className="concertBody">
        <CardList></CardList>
    </div>
  );
}

export default concertPage;
