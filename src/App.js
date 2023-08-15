import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setNewCountValue] = useState(0);
  const countUp = () => {
    setNewCountValue(count + 1);
  }
  const countRest = () => {
      setNewCountValue(0);
      
  };
  const countDown = () => {
      setNewCountValue(count - 1);
  };

  return (
      <div className="App">
          <p>Count: {count}</p>
          <button className='incr' onClick={countUp}>Increment</button>
          <button className="rest" onClick={countRest}>Rest</button>
          <button className='decr' onClick={countDown}>Decrement</button>
      </div>
  );
}

export default App;
