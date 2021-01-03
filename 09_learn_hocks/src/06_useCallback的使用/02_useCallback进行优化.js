import React, { useState, useCallback, memo } from 'react';

const HYButton = memo((props) => {
  console.log(`HYButton重新渲染 ${props.title}`);
  return <button onClick={props.increment}>HYButton + 1</button>
});
/*
* 应用场景
* 在将一个组件中的函数，传递给子元素进行回调使用时， 使用useCallback对函数进行处理的性能优化*/

function CallBack(props){

  const [count, setCount] = useState(0);
  const [show, setShow ] = useState(true);

  console.log("页面重新渲染");

  const increment = () => {
    console.log("执行increment函数");
    setCount(count + 1);
  }

  // 用的是同一个函数 不会重新被创建 闭包 页面创建后不会被重新执行 因为返回值未发生改变 点击切换不会打印执行
  // 函数2
  const increment2 = useCallback(() => {
    console.log("执行increment--2函数");
    setCount(count + 2);
  }, [count])


  return (
    <div>
      <h1>useCallback__</h1>
      <h2>{ count }</h2>
      <HYButton title={'btn11'} increment={increment} />
      <HYButton title={'btn22'} increment={increment2}/>
      <button onClick={ e => setShow(!show)}>切换</button>
    </div>
  );
}

export default CallBack;
