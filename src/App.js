import React,{useState} from 'react';
import './App.css';
import Card from './Cards';

function App() {

  const[number,SetNumber]=useState("")
  const[name,SetName]=useState("")
  const[expiry,SetExpiry]=useState("")

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Card
            number={number}
            name={name}
            expiry={expiry}/>
        </div>
        <div className="input-form">
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={evt=>SetNumber(evt.target.value)}>
          </input>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name.toUpperCase()}
            onChange={evt=>SetName(evt.target.value)}>
          </input>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={evt=>SetExpiry(evt.target.value)}>
          </input>
        </div>
      </header>
    </div>
  );
}

export default App;
