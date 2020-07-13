import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const getDataFromServer = async() => {
    await fetch(API_URL).then(res => res.json(), 
    err => {console.log(err)})
    .then(res => {console.log(res)}, err => {console.log(err)})
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
