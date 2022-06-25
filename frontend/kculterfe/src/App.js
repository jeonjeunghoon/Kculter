import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState("");     
  
  useEffect(() => {
    fetch('/test')
    .then(response => response.text())
    .then(message => {
      setMessage(message);
    });
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className='App-title'>{message}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 안뇽
        </a>
      </header>
    </div>
  );
}

export default App;
