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
      language: ['Java', 'Rube', 'TypeScript', 'C#']
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
        </ul>
        <Cpn/>
      </div>
    );
  }

  itemClick () {
    this.setState({
      language: [...this.state.language,'HTML5']
    })
  }
}

export default App ;
