import React, {PureComponent} from 'react';
import { withRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import routes from "./router";

// eslint-disable-next-line
import {Route, NavLink, Switch} from 'react-router-dom'
import './App.css'
// import Home from "./page/Home";
// import About from "./page/About";
// import Profile from "./page/Profile";
// import User from "./page/User";
// import NoMatch from "./page/NoMatch";
// import Login from "./page/Login";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 12,
      info: {
        name: 'Tosikat',
        age: 18,
        height: 174
      }
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
          {/*<Link to={"/"}>首页 | </Link>*/}
          {/*<Link to={"/about"}>关于 | </Link>*/}
          {/*<Link to={'/profile'}>我的</Link>*/}

          {/*NavLink内联样式的使用*/}
          {/*<NavLink to={"/"} exact activeStyle={{color: 'red'}}>首页 | </NavLink>*/}
          {/*<NavLink to={"/about"} activeStyle={{color: 'red'}}>关于 | </NavLink>*/}
          {/*<NavLink to={'/profile'} activeStyle={{color: 'red'}}>我的</NavLink>*/}

          <NavLink exact to={"/"} activeClassName={'link-active'}> 首页 </NavLink>
          <NavLink to={"/about"} activeClassName={'link-active'}> 关于 </NavLink>
          <NavLink to={'/profile'} activeClassName={'link-active'}> 我的 </NavLink>
          <NavLink to={'/adc'} activeClassName={'link-active'}>add</NavLink>
          <NavLink to={'/user'} activeClassName={'link-active'}>用户</NavLink>
          <NavLink to={`/detail/${this.state.id}`} activeClassName={'link-active'}>详情1</NavLink>
          <NavLink to={`/detail2?name=lijun`} activeClassName={'link-active'}>详情2</NavLink>
          <NavLink to={{
                    pathname: '/detail3',
                    search: `name=${info.name}&age=${info.age}&height=${info.height}`,

                    state: info
          }} activeClassName={'link-active'}>详情3</NavLink>
          <button onClick={e => this.jumpProduct() }>商品列表</button>

          {/*<Switch>*/}
          {/*<Route exact path={'/'} component={Home}/>*/}
          {/*<Route path={'/about'} component={About}/>*/}
          {/*<Route path={'/profile'} component={Profile}/>*/}
          {/*<Route path={'/user'} component={User}/>*/}
          {/*<Route path={'/login'} component={Login}/>*/}
          {/*/!*<Route path={'/:id'} component={User}></Route>*!/*/}
          {/*<Route path={'/detail/:id'} component={Detail}/>*/}
          {/*<Route path={'/detail2'} component={Detail2}/>*/}
          {/*<Route path={'/detail3'} component={Detail3}></Route>*/}
          {/*<Route path={'/product'} component={Product}/>*/}
          {/*<Route component={NoMatch}/>*/}
          {/*</Switch>*/}

        {renderRoutes(routes)}
      </div>
    );
  }
  jumpProduct () {
    this.props.history.push('/product')// 直接进行渲染的无法通过这种方法进行手动跳转
  }
}

export default withRouter(App);
