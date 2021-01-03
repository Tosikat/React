import React, {PureComponent} from 'react';

function getRenderTime (WrapperComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrapperComponent.name}的渲染时间 ${interval}`)
    }
    render() {
      return <WrapperComponent {...this.props}/>
    }
  }
}


class CartPage extends PureComponent {
  render() {
    return (
      <div>
        <h1>CartPage</h1>
      </div>
    )
  }
}
class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

const CartPageTime = getRenderTime(CartPage);
const HomeTime = getRenderTime(Home);

export default class App extends PureComponent {
  render()
  {
    return (
      <div>
        <CartPageTime/>
        <HomeTime/>
      </div>
    );
  }
}




