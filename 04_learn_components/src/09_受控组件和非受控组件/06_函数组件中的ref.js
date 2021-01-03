import React, {PureComponent, createRef, forwardRef} from 'react';

const Category  = forwardRef(function(props, ref) {
  return (
    <div>
      {/*只能获得某个元素并且不包含子类*/}
      <h2 ref={ref}>Category组件</h2>
      <p>分类</p>
    </div>
  )
})

class Home extends PureComponent {

  render() {
    return (
      <div>
        <h2>Home组件</h2>
        <p>主页</p>
      </div>
    )
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.homeRef = createRef();
    this.categoryRef = createRef();
  }
  render() {
    return (
      <div>
        <Home ref={this.homeRef}/>
        <Category ref={this.categoryRef}/>
        <button onClick={event => this.getRef()}>toRef</button>
      </div>
    );
  }

  getRef () {
    console.log(this.homeRef)
    console.log(this.categoryRef)
  }
}

export default App;
