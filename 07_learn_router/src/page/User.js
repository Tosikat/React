import React, {PureComponent} from 'react';
import  { Redirect } from 'react-router-dom'
class User extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: true
    };
  }
  render() {
    return this.state.isLogin ? (
      <div>
        <h1>Tosikat</h1>
        <h2>age: 18</h2>
        <button onClick={() => this.changeLogin() }>登录/退出</button>
      </div>
    ) : <Redirect to={'/login'}></Redirect>

  }

  changeLogin () {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
}

export default User;
