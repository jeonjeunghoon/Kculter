import './concertPage.css';
import CardList from './components/card/CardList';

function concertPage() {
  return (
    <div className="body">
      <div className='cardList'>
        <CardList></CardList>
      </div>
    </div>
  );
}

export default concertPage;
