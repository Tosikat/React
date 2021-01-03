import React, {PureComponent} from 'react';
import style from './App.module.css'
class App extends PureComponent {
  render() {
    return (
      <div className={style.app}>
        App-Top
        <h1 className={style.title}>App组件</h1>
        <p className={style.context}>内容</p>
      </div>
    );
  }
}

export default App;
