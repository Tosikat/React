import React, {PureComponent} from 'react';
import { incAction, changeBanner, changeRecommand} from "../store/actionCreators";
// import { connect } from "../untils/connect";
import { connect } from 'react-redux'
import axios from "axios";



class Home extends PureComponent {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data;
      console.log(data);
      this.props.changeBanner(data.banner.list)
      this.props.changeRecommand(data.recommend.list)
      console.log(this.props)
    //  home中请求， about中渲染
    })
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
  count: state.count,
  banner: state.banner,
  recommend: state.recommend
})

const mapDispatchToProps = dispatch => {
  return {
    increment: function (num){
      dispatch(incAction(num))
    },
    changeBanner (banner) {
      dispatch(changeBanner(banner))
    },
    changeRecommand (recommend) {
      dispatch(changeRecommand(recommend))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
