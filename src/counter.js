import React, { useState } from 'react';

function Counter() {
  // State to store the count
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
