import React, {Component} from 'react';

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      message: 'Tosikat',
      name: 'lijun',
      count: 0
    };
  }
  render()
  {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.message}</h1>
        <h2>{this.state.name}</h2>
        <button onClick={e => this.itemClick()}>Click me</button>
      </div>
    );
  }

  itemClick () {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })

  }
}

export default App ;
