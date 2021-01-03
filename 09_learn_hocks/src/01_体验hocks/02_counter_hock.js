import React, { useState } from 'react';

function CounterHock() {
  // const [count, setCount ] = useState(0);
  const [count, setCount ] = useState(() => 0);
  // useState传入初始化值， 默认undefined
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={ e => setCount(count + 2)}>+2</button>
      <button onClick={ e => setCount((prev) => prev + 4)}>+4</button>
      <button onClick={ e => setCount(count - 2)}>-2</button>
    </div>
  );
}

export default CounterHock;
