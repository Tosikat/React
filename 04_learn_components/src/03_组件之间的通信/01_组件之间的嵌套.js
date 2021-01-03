import React, {Component} from 'react';

function Swiper () {
  return <h3>Swiper组件</h3>
}

function Banner () {
  return(
    <h2>Banner组件
      <Swiper/>
    </h2>
  )
}
function NavBar () {
  return <h4>NavBar组件</h4>
}

export default class App extends Component {
  render()
  {
    return (
      <div>
        <h1>App组件</h1>
        <Banner/>
        <NavBar/>
      </div>
    );
  }
}

