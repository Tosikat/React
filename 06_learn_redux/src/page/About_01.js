import React, {PureComponent} from 'react';
import store from "../store";
import { decAction } from "../store/actionCreators";

class About extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count
    };
  }

  componentDidMount() {
    this.unsubscribe =store.subscribe(() => {
      this.setState({
        count: store.getState().count
      });
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数： {this.state.count}</h2>
        <button onClick={event => this.increment()}>-1</button>
        <button onClick={event => this.decrement()}>-7</button>
      </div>
    );
  }
  increment () {
    store.dispatch(decAction(1))
  }

  decrement () {
    store.dispatch(decAction(7))
  }

}

export default About;
