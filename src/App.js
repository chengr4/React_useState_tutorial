import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from './useForm';

function App() {
  // useState returns array!
  // 10 == initial state
  // setCount == function
  // count == value
  const [{count1, count2}, setCount] = useState({count1:10, count2:100});
  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  */ 
  // ->
  const [values, handleChange] = useForm({email:'', password:''});
  return (
    <div>
      <button onClick={() => setCount(c => ({ // 不懂為何要加一個()
        ...c,
        count1:c.count1++
      }))}>
        +
      </button>
      <div>{count1}</div>
      <div>{count2}</div>
      <input name='email' value={values.email} onChange={handleChange}/>
      <input name='password' value={values.password} onChange={handleChange}/>
    </div>);
}

export default App;
