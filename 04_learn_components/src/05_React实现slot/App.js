import React, {Component} from 'react';
import NavBar from "./NavBar";
import NavBarOne from "./NavBarOne";

class App extends Component {
  render() {
    return (
      <div>

        <NavBar>
          <a href="/#">第一个</a>
          <p>第二个</p>
          <div>第三个</div>
        </NavBar>

        <NavBarOne leftSlot={<span>aaa</span>}
                   centerSlot={<strong>bbb</strong>}
                   rightSlot={<span>ccc</span>}/>

      </div>
    );
  }
}

export default App;
