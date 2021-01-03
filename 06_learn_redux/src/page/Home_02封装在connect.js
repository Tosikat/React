import React, {PureComponent} from 'react';
import { incAction} from "../store/actionCreators";
import { connect } from "../untils/connect";
class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数： {this.props.count}</h2>
        <button onClick={event =>this.props.increment(1)}>+1</button>
        <button onClick={event => this.props.increment(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    count: state.count

})

const mapDispatchToProps = dispatch => {
  return {
    increment: function (num){
      dispatch(incAction(num))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
