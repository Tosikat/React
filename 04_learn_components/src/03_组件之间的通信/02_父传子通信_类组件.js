import React, {Component} from 'react';

class ChildCpn extends Component {
  constructor(props) {
    super(props);
    // 让父类做个保存 prop不传入super 子组件也能渲染 但是constructor获取不到props(underfined)
    // 但是在源码中分析 会保存到子组件对象的实例中并且挂载在componentDidMount
    // 故这个props能在render函数中和挂载生命周期函数中获取到props
    this.state = {
    };
    console.log(this.props)
  }
  render() {
    return (
      <div>
          <h3>{this.props.name}--{this.props.age}-{this.props.hobbies}</h3>
      </div>
    )
  }
}

export default class App extends Component {
  render()
  {
    return (
      <div>
        <ChildCpn name="lijun" age="22" hobbies="query"/>
        <ChildCpn name="Tosikat" age="18" hobbies="cake"/>
      </div>
    );
  }
}
