import React from 'react';
import './concertPage.css';
import CardList from './components/card/CardList';
import { useSelector } from 'react-redux';

const place = useSelector(state => state.place);

function concertPage() {
  return (
    <div className="concertBody">
        <CardList></CardList>
    </div>
  );
}

export default concertPage;
