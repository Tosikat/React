import React, {Component} from 'react';

class Header extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="header">Header:
          <input type="text" id={'header'}
                 onChange={e => this.inpChange(e)}
                 value={this.props.value}/>
        </label>
      </div>
    );
  }
  inpChange(e) {
    this.props.transData(e.target.value)
  }
}

export default Header;
