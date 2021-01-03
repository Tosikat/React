import React from 'react'
import useGetPositon from "../hocks/HockGetPositon"


function Index(props){
  const a = useGetPositon()
  console.log(a);
  return (
    <div style={{padding: '1000px 0'}}>
      <h1 style={{position: 'fixed', top: 0, left: 0}}>当前位置: {a}</h1>
    </div>
  )
}

export default Index ;
