import React, {Component} from 'react';

class TabBar extends Component {
  render() {
    console.log("tabbar中的render函数")
    return (
      <div>
        <h3>TabBar组件</h3>
      </div>
    )
  }
}

// eslint-disable-next-line
class Cpn extends Component {
  render() {
    console.log("cpn中的render函数")
    return (
      <div>
        <h3>Cpn组件</h3>
        <TabBar/>
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
        <Cpn></Cpn>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.count !== nextState){
      return true ;
    }
    return false ;
  }

  itemClick () {
    this.setState({
      language: [...this.state.language,'HTML5'],
    })
  }
  textChange () {
    this.setState({
      message: 'Tosikat'
    })
  }
}

export default App ;
