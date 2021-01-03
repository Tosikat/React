import React, {PureComponent, createRef} from 'react';

class Counter extends PureComponent {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={event => this.add()}>counter</button>
      </div>
    )
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }
}


class App extends PureComponent {
  // eslint-disable-next-line
  constructor() {
    super();
    // 构建一个ref实例
    this.titleRef = createRef();
    this.counterRef = createRef();
    this.titleEl = null;
  }
  render() {
    return (
      <div>
        {/*不推荐使用*/}
        <h2 ref="titleRef">Hello React</h2>
        {/*推荐使用*/}
        <h2 ref={this.titleRef}>Hello React</h2>
        <h2 ref={arg => this.titleEl = arg}>Hello React</h2>
        <button onClick={event => this.changeText()}>改变文本</button>
        <hr/>
        <Counter ref={this.counterRef}/>
        <button onClick={event => this.changeCount()}> App</button>
      </div>
    );
  }

  changeText () {
    console.log(this.refs.titleRef)
    this.refs.titleRef.innerHTML = "Hello CoderPassion"
    console.log(this.titleRef)
    this.titleRef.current.innerHTML = "Hello JavaScript"
    console.log(this.titleEl)
    this.titleEl.innerHTML = "Hello TypeScript"
  }

  changeCount () {
    console.log(this.counterRef)
    this.counterRef.current.add()
  }
}

export default App;
