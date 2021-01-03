// eslint-disable-next-line
import React, {useState, useReducer} from 'react';
import reducer from "./Reducer";

function Profile(props) {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0} )
  return (
    <div>
      <h2>当前计数: { state.count }</h2>
      <button onClick={ e => dispatch({type: 'increment' })}>+1</button>
      <button onClick={ e => dispatch({type: 'decrement'})}>-1</button>
    </div>
  );
}

export default Profile;
