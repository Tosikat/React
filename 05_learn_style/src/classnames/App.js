import React, {PureComponent} from 'react';
import classNames from 'classnames'

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isActive: true,
      isBar: true
    };
  }
  render() {
    const { isActive, isBar } = this.state;
    const errClass = "error";
    const warnClass = "warn";
    return (
      <div>
        {/*原生react写入classname*/}
        <h2 className={"foo bar active title"}>标题1</h2>
        <h2 className={"title" + (isActive ? " active" : "")}>标题2</h2>
        <h2 className={"title" + isActive ? " active" : ""}>标题3</h2>
        <h2 className={["title", (isActive ? "active" : "")].join(" ")}>标题4</h2>
        <hr/>
      {/* classnames */}
        <h2 className={classNames("foo", "bar", "active", "title")}>标题5</h2>
        <h2 className={classNames({"active": isActive, "bar": isBar})}>标题6</h2>
        <h2 className={classNames("foo", errClass, warnClass, "active")}>标题7</h2>
        <h2>标题8</h2>
      </div>
    );
  }
}

export default App;
