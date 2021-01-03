import React, {PureComponent} from 'react';

function LoginPage () {
  return (
    <div>
      <h2>LoginPage</h2>
    </div>
  )
}

function withAuth (WrappedComponent) {
  const NewCpn = props => {
    const {isLogin} = props;
    if (isLogin) {
      return  <WrappedComponent {...props}/>
    }else {
      return <LoginPage/>
    }
  }
  // NewCpn.displayName = "AuthCpn" 给组件改名
  return NewCpn;
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

const CartPageWrapped = withAuth(CartPage);

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
  }
  render()
  {
    return (
      <div>
        <CartPageWrapped isLogin={this.state.isLogin}/>
        <button onClick={event => this.login()}>Clicke me</button>
      </div>
    );
  }
  login (){
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
}



export default App;
