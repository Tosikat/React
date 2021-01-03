import React, {useState, useMemo, memo} from 'react';

const  HYInfo = memo((props) =>{
  console.log("HYInfo重新渲染");
  return <h2>名字： {props.info.name}  年龄： {props.info.age} </h2>
})

function ChildMemo (props){
  console.log('ChildMemo组件重新渲染');
  const [show, setShow] = useState(true);

  // const info = {name: 'Tosikat', age: 18}
  //重新渲染这个页面时 重新定义info对象 导致与子类数据不同, 后台确定这两个为不同对象 故子组件会被重新渲染

  //为解决这个问题 使用useMemo API
  const info = useMemo(() => {
    return {name: 'Tosikat', age: 18};
  }, [])

  return (
    <div>
      <HYInfo info={info}/>
      <button onClick={ e => setShow(!show)}>重新渲染</button>
    </div>
  );
}

export default ChildMemo;
