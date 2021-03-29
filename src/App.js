import React, { useState, useEffect } from 'react';
import './App.css';
import { makeSentence } from './test1';
import Provider from './test2';
import { getProcessingPage } from './test4';
import Test5 from './test5';

const App = () => {

  const [sentence, setSentence] = useState([]);
  const [val, setVal] = useState('penpineapplepenapple');

  useEffect(() => {

    // Print the city for lat/long 51.5074 and 0.1278 in console
    Provider.findCity(51.5074, 0.1278)
    .then(data => {
      console.log(data);
    })

    // Print the weather for lat/long 51.5074 and 0.1278
    Provider.getWeather('London');

    // Print the weather and currency for a given city (London)
    Provider.findCity(51.5074, 0.1278).then(data => Provider.getWeather(data));
    Provider.findCity(51.5074, 0.1278).then(data => Provider.getLocalCurrency(data));

    console.log('Test 4');
    getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' }])
    .then(data => {
      console.log(data)
    })

  }, [])

  const makeSentences = () => {
    setSentence(makeSentence(val, ['apple', 'pen', 'applepen', 'pine', 'pineapple']));
  }
  return (
    <div className="App">
      <input type="text" value={val} onChange={(event) => setVal(event.currentTarget.value)} />
      <button onClick={makeSentences}>Submit</button>
      <br /><br /><br />
      {
        sentence.map((item, index) => <div key={item + index}>{item}</div>)
      }

      <br/>
      <Test5 />

      <br />
    </div>
  );
}

export default App;
