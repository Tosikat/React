import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div>
        <label htmlFor="footer">footer:
          <input type="text" id={'footer'}
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

export default Footer;
