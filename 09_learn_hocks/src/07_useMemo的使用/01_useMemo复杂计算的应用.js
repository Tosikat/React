import React, {useState, useMemo} from 'react';

function calcNumber(count) {
  console.log('calcNumber函数执行');
  let total = 0;
  for (let i = 1;i <= count; i++) {
    total += i;
  }
  return total;
}

function HockMemo (){
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  // 防止页面数据改变 进行不必要的页面渲染
  const total = useMemo(() => {
    return calcNumber(count);
  }, [count])

  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={ e => setCount(count + 1)}>+ 11</button>
      <button onClick={e => setShow(!show)}>重新渲染</button>
    </div>
  );
}

export default HockMemo;
