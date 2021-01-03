import React, {Component, PureComponent, memo} from 'react';

// PureComponent只对类组件执行render函数起作用

class TabBar extends PureComponent {
  render() {
    console.log("tabbar中的render函数")
    return (
      <div>
        <h3>TabBar组件</h3>
      </div>
    )
  }
}

function NavBar () {
  console.log("NavBar中的render函数")
  return (
    <div>
      <h2>NavBar组件</h2>
    </div>
  )
}

// 只有当props中的值发生改变时render函数才会被重新执行 其子组件也不会被重新渲染
const MemoInstance = memo(function Footer () {
  console.log("Footer中的render函数")
  return (
    <div>
      <h3>Footer组件</h3>
    </div>
  )
})



class Cpn extends Component {
  render() {
    console.log("cpn中的render函数")
    return (
      <div>
        <h3>Cpn组件</h3>
        <TabBar/>
        <NavBar/>
        <MemoInstance/>
      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      language: ['Java', 'Rube', 'TypeScript', 'C#'],
      message: 'lijun'
    };
  }
  render() {
    console.log("App中的render函数")
    return (
      <div>
        <h1>编程语言</h1>
        <ul>
          {
            this.state.language.map( (item, index) => {
              return <li key={index} >{item}</li>
            })
          }
          <button onClick={event => {this.itemClick()}}>点击增加</button>
          <button onClick={event => {this.textChange()}}>改变文本</button>
        </ul>
        <Cpn/>
      </div>
    );
  }
  // 不建议使用深层比较 比较影响效率 消耗性能
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if(this.state.count !== nextState){
  //     return true ;
  //   }
  //   return false ;
  // }

  itemClick () {
    this.setState({
      language: [...this.state.language,'HTML5'],
    })
  }
  textChange () {
    this.setState({
      message: 'lijun'
    })
  }
}

export default App ;
