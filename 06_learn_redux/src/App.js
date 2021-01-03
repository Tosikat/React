import React, {PureComponent} from 'react';
import Home from "./page/Home";
import About from "./page/About";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <About/>
      </div>
    );
  }
}

export default App;
