import React, { Component } from 'react';

class Cpn extends Component {
  render() {
    return <h2>Cpn组件</h2>
  }
  componentWillUnmount() {
    console.log("Cpn组件中的componentWillUnmount方法");
  }
}
export default class App extends Component {

  constructor(props) {
    super();
    this.state = {
      count: 0,
      isShow: true
    }
    console.log("执行constructor函数")
  }

  render () {
    console.log("执行render函数")
    return (
      <div>
        <h1>App声明周期函数</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => {this.itemClick()}}>+</button>
        <hr/>
        <button onClick={() => { this.childShow()}}>切换</button>
        { this.state.isShow && <Cpn/>}
      </div>
    )
  }

  itemClick () {
    this.setState({
      count: this.state.count + 1
    })
  }

  childShow () {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidMount() {
    console.log("componentDidMount函数执行");
  }
  componentDidUpdate(prevPropsw, prevState, snapshot) {
    console.log("componentDidUpdate执行");
  }

}
