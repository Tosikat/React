import React, {Component} from 'react';

class NavBarOne extends Component {

  render() {
    const {leftSlot, centerSlot, rightSlot} = this.props;
    return (
        <div className="nav-bar">
          <div className="slot-item slot-left">{leftSlot}</div>
          <div className="slot-item slot-center">{centerSlot}</div>
          <div className="slot-item slot-right">{rightSlot}</div>
        </div>
    );
  }
}

export default NavBarOne;
