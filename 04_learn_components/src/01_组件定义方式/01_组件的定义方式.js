import React from 'react';


// 类组件
// export default class App extends React.Component {

//   render () {
//     return (
//       <div>
//         <h1>我是app组件</h1>
//       </div>
//     )
//   }
// }

// 函数组件
/*特点
1.函数内部没有this
2.没有内部的状态（hock提供了函数的内部状态）
 */
export default function App () {
  return (
    <div>
      <h2>Tosiakt</h2>
    </div>
  )
}