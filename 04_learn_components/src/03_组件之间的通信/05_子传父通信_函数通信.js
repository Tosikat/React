import React, {Component} from 'react';

class BtnCpn extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.itemClick}>check</button>
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <h1>计数： {this.state.counter}</h1>
        <button onClick={e => this.itemClick()}>Clicke me</button>
        <BtnCpn itemClick={e =>  this.itemClick() }/>
      </div>
    );
  }

  itemClick () {
    console.log("itemClick被调用!")
    console.log(this.state.counter)
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

