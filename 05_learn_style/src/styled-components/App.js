import React, {PureComponent} from 'react';
import Home from './Home'
import styled from 'styled-components'
const OutDiv = styled.div`
 color: red;
 outline: 1px solid red;
 .head{
   color: #00a8ff
 }
`

class App extends PureComponent {
  render() {
    return (
      <OutDiv>
        <h1 className={"head"}>App</h1>
        <p>123</p>
        <Home/>
      </OutDiv>
    );
  }
}

export default App;
