import React, {memo, useState, useRef, useEffect} from 'react'

const SetRef = memo(function () {
  const [count, setCount] = useState(0);
  const timer = useRef();
  console.log(timer)
  const changeCount =  () => {
    setCount(count + 1);
  }

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      changeCount()
    },1000)
    console.log(timer.current)
  }, [timer.current])

  return (
    <div style={{
      width: '100%',
      height: '200px',
      border: '1px solid #ccc'
    }}>
      <h1>当前计数： {count}</h1>
    </div>
  )

})
export default SetRef;
