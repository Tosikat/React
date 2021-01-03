import React, {PureComponent} from 'react';
// eslint-disable-next-line
import { NavLink, Route, Switch } from "react-router-dom";
// import Index from "./about/Index";
// import Culture from "./about/Culture";
// import Contact from "./about/Contact";
import { renderRoutes, matchRoutes } from "react-router-config";
import routes from "../router";



export  function JoinUs () {
  return (
    <div>
      <h1>加入我们</h1>
    </div>
  )
}

export  class About extends PureComponent {
  constructor(props) {
    super(props);
    // render 函数渲染的时候才有 用Switch拿不到
    console.log(this.props)
    this.state = {
      test: [
        {
          to: '/about/culture',
          name: 'about-link'
        }
      ]
    }
  }
  render() {
    const branch = matchRoutes(this.props.route.routes, '/about')
    console.log(branch);
    return (
      <div>
        <NavLink exact to={'/about'} activeClassName={'about-link'}>关于我们</NavLink>
        {this.state.test.map(item => {
          return <NavLink to={item.to} activeClassName={item.name}>企业文化</NavLink>
        })}
        {/*<NavLink to={'/about/culture'} activeClassName={'about-link'}>企业文化</NavLink>*/}
        <NavLink to={'/about/contact'} activeClassName={'about-link'}>联系我们</NavLink>
        <button onClick={e => this.joinUs()}>加入我们</button>

        {/*<Switch>*/}
        {/*  <Route exact path={'/about'} component={Index}/>*/}
        {/*  <Route path={'/about/culture'} component={Culture}/>*/}
        {/*  <Route path={'/about/contact'} component={Contact}/>*/}
        {/*  <Route path={'/about/joinUs'} component={JoinUs}/>*/}
        {/*</Switch>*/}
        { renderRoutes(routes[1].routes)}
      </div>
    );
  }

  joinUs () {
    console.log(this.props);
    // 必须通过router渲染
    this.props.history.push('/about/joinUs');
  }
}

