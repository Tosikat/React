import React, {Component} from 'react';

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      message: 'Tosikat',
      name: 'lijun'
    };
  }
  render()
  {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.name}</h2>
        <button onClick={e => this.itemClick()}>Click me</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Update函数中的 "+this.state.message)
  }

  // setState中利用Object。assign将更改后的数据合并在一个对象中
  //Object.assign({}, previous, new);
  itemClick () {
    this.setState({
      message: 'lijun'
    }, () => {
      console.log("setState回调中的数据 "+this.state.message)
    })
    console.log(this.state.message)
  }
}

export default App ;
