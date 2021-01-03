import React, {PureComponent} from 'react';
import store from "../store";
import { incAction } from "../store/actionCreators";

class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count
    };
  }

  componentDidMount() {
    store.subscribe(() => {
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
        <h1>Home</h1>
        <h2>当前计数： {this.state.count}</h2>
        <button onClick={event => this.increment()}>+1</button>
        <button onClick={event => this.decrement()}>+5</button>
      </div>
    );
  }

  increment () {
    store.dispatch(incAction(1))
  }

  decrement () {
    store.dispatch(incAction(5))
  }

}

export default Home;
