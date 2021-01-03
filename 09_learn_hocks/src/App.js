// eslint-disable-next-line
import React, {PureComponent, createContext} from 'react';
// import CountClass from './01_体验hocks/01_counter_class'
// import CountHock from "./01_体验hocks/02_counter_hock";
// import MultiState from './02_useState的使用/01_多状态state的使用'
// import ComplexState from "./02_useState的使用/02_复杂状态的修改";
// import ClassTitle from './03_useEffect的使用/01_class组件中state渲染title'
// import HockTitle from './03_useEffect的使用/02_hock组件中state渲染title'
// import SubscribeCancel from './03_useEffect的使用/03_hock模仿生命周期中订阅和取消订阅优化'
// import MultiEffect from './03_useEffect的使用/04_多useEffect的调用'
// import HockContext from "./04_useContext的使用/HockContext";
// import Profile from "./05_useReducer的使用/Profile";
// import Home from "./05_useReducer的使用/Home";
// import CallBack from './06_useCallback的使用/01_useCallback不能进行优化的情况'
// import CallBack from './06_useCallback的使用/02_useCallback进行优化'
// import HockMemo from './07_useMemo的使用/01_useMemo复杂计算的应用'
// import ChildMemo from "./07_useMemo的使用/02_useMemo传入子组件中的应用";
// import HockRef from "./08_useRef的使用/01_useRef引用dom";
// import HockUseRef from "./08_useRef的使用/02_useRef引用其他数据";
import SetRef from "./08_useRef的使用/03_useRef中应用定时器";
// import HockUseImperativeHand from "./09_useImperativeHand的使用/01_useInmperative基本的用法";
// import Home from "./11_自定义hocks/01_创建自定义hock";
// import Index from "./11_自定义hocks/04_自定义hocks存储localstorage";
// export const UseContext = createContext();
// export const ThemeContext = createContext();

export const UserContext = createContext();
export const TokenContext = createContext();

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      obj: {name: 'lijun', age: 22, height: 174}
    };
  }

  render() {

    return (
      <div>
        <h1>Hocks Start!</h1>
        {/*<CountClass/>*/}
        {/*<CountHock/>*/}
        {/*<MultiState/>*/}
        {/*<ComplexState/>*/}

        {/* 2.useEffect */}
        {/*<ClassTitle/>*/}
        {/*<HockTitle/>*/}

        {/*{ this.state.show && <SubscribeCancel/>}*/}
        {/*<button onClick={ e => this.setState({show: !this.state.show })}>切换</button>*/}

        {/*{ this.state.show && <MultiEffect/>}*/}
        {/*<button onClick={ e => this.setState({show: !this.state.show })}>切换</button>*/}

        {/*3.useContext*/}
        {/*<UseContext.Provider value={this.state.obj}>*/}
        {/*  <ThemeContext.Provider value={{name: 'Tosikat', age: 18, height: 170}}>*/}
        {/*    <HockContext value={{name: 'Akari', age: 12, height: 160}}/>*/}
        {/*  </ThemeContext.Provider>*/}
        {/*</UseContext.Provider>*/}

        {/*4.useReducer*/}
        {/*<Profile/>*/}
        {/*<Home/>*/}

        {/*5.useCallback*/}
        {/*{ this.state.show && <CallBack/>}*/}
        {/*<button onClick={ e => this.setState({show: !this.state.show })}>切换</button>*/}

        {/*6.useMemo*/}
        {/*<HockMemo/>*/}

        {/*<ChildMemo/>*/}

        {/*<HockRef/>*/}
        {/*<HockUseRef/>*/}
        <SetRef/>

        {/*<HockUseImperativeHand/>*/}

        {/*{ this.state.show && <Home/>}*/}
        {/*<button onClick={ e => this.setState({show: !this.state.show })}>切换</button>*/}

        {/*<UserContext.Provider value={{name: 'Timo', age: 6, height: 80}}>*/}
        {/*  <TokenContext.Provider value={'fdsfas54310fsdf1a6$rsfs'}>*/}
        {/*    <Index/>*/}
        {/*  </TokenContext.Provider>*/}
        {/*</UserContext.Provider>*/}
  </div>
    );
  }
}

