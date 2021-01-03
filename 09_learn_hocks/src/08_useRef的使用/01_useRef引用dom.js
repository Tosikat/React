// eslint-disable-next-line
import React, {useState, useRef} from 'react';

class HYBtn extends React.Component {
  render() {
    return <h2>HYBtn1</h2>
  }
}

function HYBtn2 () {
  return <h2>HYBrn2</h2>
}


function HockRef (){
  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();
  // 函数组件不能运用useRef获取
  console.log(titleRef);

  function changeDom () {
    console.log(titleRef.current)
    titleRef.current.innerHTML = 'CHANGE!';
    console.log(inputRef);
    inputRef.current.focus();
    console.log(testRef, testRef2);
  }
  return (
    <div>
      <h1 ref={titleRef}>HockUseRef</h1>
      <input type="text" ref={inputRef}/>
      <HYBtn ref={testRef}/>
      <HYBtn2 ref={testRef2}/>
      <button onClick={ e => changeDom()}>修改DOM</button>
    </div>
  );
}

export default HockRef;
