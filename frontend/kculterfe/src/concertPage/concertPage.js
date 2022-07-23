import './concertPage.css';
import Sidebar from './components/sidebar/Sidebar';
import CardList from './components/card/CardList';

function concertPage() {
  return (
    <div className="body">
      {/* <div className="sidebarGrid">
        <Sidebar></Sidebar>
      </div> */}
      {/* <div className='bodyGrid'> */}
        {/* <div className='concertNavbar'>
          Concert
        </div> */}
        {/* <div className='pageBody'> */}
          {/* <div className='option'>
            <div className='search'>
              <button>back button</button>
              <input type='text' size="10"></input>
            </div>
            <div className='sortBtn'>
              <button>date</button>
              <button>like</button>
            </div>
          </div> */}
          <div className='cardList'>
            <CardList></CardList>
          </div>
        </div>
      // </div>
    // </div>
  );
}

export default concertPage;
