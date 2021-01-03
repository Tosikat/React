import React, { useState, useEffect } from 'react';

function SubscribeCancel(props){
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('发布订阅事件');
    return () => {
      console.log("取消订阅事件");
    }
  }, [])
  // [] 防止频繁的发布订阅 性能优化 只有当该组件被重新渲染时才会调用

  return (
    <div>
      <h1>SubscribeCancel</h1>
      <h1>当前计数： {count}</h1>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default SubscribeCancel;
