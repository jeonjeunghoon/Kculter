import React from 'react';
import './concertPage.css';
import ConcertList from './components/ConcertList';
import ConcertSearchBar from "./components/ConcertSearchBar";

function concertPage() {

  return (
    <div className="concertBody">
      <ConcertList/>
    </div>
  );
}

export default concertPage;
