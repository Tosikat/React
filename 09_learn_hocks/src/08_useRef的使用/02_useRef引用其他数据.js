import React, {useState, useRef, useEffect} from 'react';

/*
* useRef返回一个ref对象, 返回的ref对象再整个声明周期保持不变
* 用法1: 引入DOM或者组件 必须为类组件
* 用法2: 保存一个数据,这个对象再整个声明周期保持不变 */
function HockUseRef(props){
  const [count, setCount] = useState(0);

  const numRef = useRef(count);

  useEffect(() => {
   numRef.current = count;
  // 依赖count 当count改变时 将更新
  }, [count]);
  return (
    <div>
      <h2>之前数字: {numRef.current}</h2>
      <h2>当前数字： {count}</h2>
      <button onClick={ e => setCount( count + 10)}>+ 10</button>
    </div>
  );
}

export default HockUseRef;
