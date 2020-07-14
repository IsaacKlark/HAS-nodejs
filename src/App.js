import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const getDataFromServer = async() => {
    await fetch(API_URL).then(res => res.json(), 
    err => {console.log(err)})
    .then(res => {console.log(res)}, err => {console.log(err)})
  };
  const [dataToServer1, setDataToServer1] = useState(0);
  const [dataToServer2, setDataToServer2] = useState(0);

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="data1"
        onBlur={e => {
          setDataToServer1(e.target.value);
        }}
      />
      <input 
        type="text" 
        placeholder="data2"
        onBlur={e => {
          setDataToServer2(e.target.value);
        }}
      />
      <button 
        type="button"
        onClick={
          async () => {
            const data = {
              data1: +dataToServer1,
              data2: +dataToServer2
            };

            console.log(data)

            await fetch(API_URL + '/send', {
              method: 'POST',
              body: JSON.stringify(data)
            });
          }
        }
      >
        send
      </button>
        
    </div>
  );
}

export default App;
