import React, {Component} from 'react';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      counte: 0
    }
  }

  render () {
    return (
      <div>
        <h1>Hello React</h1>
        <h1>{this.state.counte}</h1>
        <button onClick={() => {this.itemClick()}}>+</button>
      </div>
      
    )
  }

  itemClick () {
    console.log(this.state.counte);
  }
}