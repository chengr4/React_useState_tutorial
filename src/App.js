import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useState returns array!
  // 10 == initial state
  // setCount == function
  // count == value
  const [{count1, count2}, setCount] = useState({count1:10, count2:100});
  return (
    <div>
      <button onClick={() => setCount(c => ({
        ...c,
        count1:c.count1++
      }))}>
        +
      </button>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>);
}

export default App;
