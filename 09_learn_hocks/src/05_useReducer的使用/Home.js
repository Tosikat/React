// eslint-disable-next-line
import React, {useState, useReducer} from 'react';
import reducer from "./Reducer";

function Home(props) {
  const [state, dispatch] = useReducer(reducer, { isLogin: true})
  return (
    <div>
      {state.isLogin ? 'Hello Tosikat!': '请登录'}
      <button onClick={ e => dispatch({ type: 'changeState'})}>切换</button>
    </div>
  );
}

export default Home;
