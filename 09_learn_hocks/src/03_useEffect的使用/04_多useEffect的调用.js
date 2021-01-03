import React, { useState, useEffect} from 'react';

function MultiEffect() {
  const [count, setCount] = useState(0);
  const [isLogin, setIslogin] = useState(true);

  useEffect(() => {
    console.log('页面重新加载')

    return () => {
      console.log('页面被销毁')
    }
}, [])

  useEffect(() => {
    console.log('dom元素渲染')
  },[count])


  useEffect(() => {
    console.log('元素重新挂载')
  }, [isLogin])

  useEffect(() => {
    console.log('Axios请求发送')

    return () => {
      console.log('Axios取消发送')
    }
  }, [])

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={ e => setCount(count + 1)}>+1</button>
      { isLogin ? "Tosikat": "请登录" }
      <button onClick={ e => setIslogin(!isLogin)}>Show it</button>
    </div>
  );
}

export default MultiEffect;
