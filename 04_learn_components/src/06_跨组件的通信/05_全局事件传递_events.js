import React, {PureComponent} from 'react';
import {EventEmitter} from 'events';
const eventBus = new EventEmitter()


class Cpn extends PureComponent {
  render() {
    return (
      <div>
        <h1>Cpn组件</h1>
        <button onClick={ event => this.emitEvent()}>cpn按钮</button>
      </div>
    )
  }
  emitEvent () {
    // 事件名称 传递 的参数
    eventBus.emit('sayhello',123,'Hello cpn', 'lijun')
  }
}

class Cpn2 extends PureComponent {
  render() {
    return(
      <div>
        <h2>Cpn2</h2>
      </div>
    )
  }

  componentDidMount() {
    eventBus.addListener("sayhello", this.handlerSayhelloListener)
  }

  componentWillUnmount() {
    eventBus.removeListener("sayhello", this.handlerSayhelloListener)
  }

  handlerSayhelloListener () {
    console.log(arguments)
  }
}

class App extends PureComponent {

  render()
  {
    return (
      <div>
        <h1>App组件</h1>
        <Cpn/>
        <Cpn2/>
      </div>
    );
  }


}

export default App ;
