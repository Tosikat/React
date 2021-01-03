import React from 'react';
import { decAction } from "../store/actionCreators";
import { connect } from '../untils/connect'

function About(props){
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数： {props.count}</h2>
        <button onClick={event => props.decrement(1)}>-1</button>
        <button onClick={event => props.decrement(7)}>-7</button>
      </div>
    );

}


const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: function (num){
     dispatch(decAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

