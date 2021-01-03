import React from 'react';
import { decAction } from "../store/count/actionCreators";
// import { connect } from '../untils/connect'
import { connect } from 'react-redux';

function About(props){
  console.log(props)
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数： {props.count}</h2>
        <button onClick={event => props.decrement(2)}>-2</button>
        <button onClick={event => props.decrement(7)}>-7</button>
        <ul>
          {
            props.banner.map(item => {
              return <li key={item.acm}>{item.title}--{item.height923}</li>
            })
          }
        </ul>
        <ul>
          {
            props.recommend.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    count: state.countInfo.count,
    banner: state.multidataInfo.banner,
    recommend: state.multidataInfo.recommend
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

