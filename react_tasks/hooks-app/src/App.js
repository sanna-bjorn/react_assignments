import React, { useState } from 'react';

// declare state and initialise with 0
const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* display current state in {count} */}
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default App;
