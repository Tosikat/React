import React, { useState, useCallback } from 'react';

function CallBack(){

  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("执行increment函数");
    setCount(count + 1);
  }

  // 用的是同一个函数 不会重新被创建 闭包
  const increment2 = useCallback(() => {
    console.log("执行increment--2函数");
    setCount(count + 2);
  }, [count])

  return (
    <div>
      <h1>useCallback__</h1>
      <h2>{ count }</h2>
      <button onClick={ e => setCount(increment)}>+ 1</button>
      <button onClick={ e => setCount(increment2)}>+ 2</button>
    </div>
  );
}

export default CallBack;
