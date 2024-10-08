import React, { useState } from 'react';
import './App.css';  // Importing a CSS file for styling

function CounterApp() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="title">Interactive Counter</h1>
      <div className="counter-display">
        <h2 className={`count-value ${count >= 0 ? 'positive' : 'negative'}`}>
          {count}
        </h2>
      </div>
      <div className="button-container">
        <button className="button increment" onClick={increment}>+</button>
        <button className="button decrement" onClick={decrement}>-</button>
      </div>
      <div className="reset-container">
        <button className="reset-button" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
