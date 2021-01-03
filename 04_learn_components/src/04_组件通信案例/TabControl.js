import React, {Component} from 'react';

class TabControl extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      currentIndex: 0
    };
  }
  render() {
    const {currentIndex} = this.state;
    return (
      <div className="app">
        {
          this.props.title.map((item, index) => {
            return (
              <div className="item" key={index}
                   onClick={() =>{this.itemClick(index)}}>
                <span  className={ (currentIndex ===index) ? "active" : {}}>
                  {item}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  };
  itemClick (index) {
    this.setState({
      currentIndex: index
    })

    const {itemClick} = this.props
    itemClick(index);
  }

}

export default TabControl;
