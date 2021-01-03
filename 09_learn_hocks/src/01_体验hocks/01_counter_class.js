import React, {PureComponent} from 'react';

class CounterClass extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <h1>当前计数： {this.state.count}</h1>
        <button onClick={ e => this.increment() }>+1</button>
        <button onClick={ e => this.decrement() }>-1</button>
      </div>
    );
  }

  increment () {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement () {
    this.setState({
      count: this.state.count - 1
    })
  }
}

export default CounterClass;
