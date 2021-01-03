import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    // 获得在父组件中类似于插槽里面的标签数据
    console.log(this.props.children);
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="slot-item slot-left">{this.props.children[1]}</div>
        <div className="slot-item slot-center">{this.props.children[0]}</div>
        <div className="slot-item slot-right">{this.props.children[2]}</div>
      </div>
    );
  }
}

export default NavBar;
