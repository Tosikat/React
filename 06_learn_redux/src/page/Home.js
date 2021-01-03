import React, {PureComponent} from 'react';
// eslint-disable-next-line
import { getAxiosData, fetchMultiData} from "../store/multidata/actionCreators";
import { incAction } from '../store/count/actionCreators'
// import { connect } from "../untils/connect";
import { connect } from 'react-redux'

class Home extends PureComponent {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAxiosData()
  }

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
  count: state.countInfo.count,
  banner: state.multidataInfo.banner,
  recommend: state.multidataInfo.recommend
})

const mapDispatchToProps = dispatch => {
  return {
    increment: function (num){
      dispatch(incAction(num))
    },
    getAxiosData () {
      dispatch(fetchMultiData)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
