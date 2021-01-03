import React, {Component} from 'react';
import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ['新款', '精选', '流行'],
      currentTitle: 0
    };

    console.log(this.state)
  }
  render() {
    return (
      <div >
        <TabControl title={this.state.title}
                    itemClick={index => this.itemClick(index)}/>
        <h1>{this.state.title[this.state.currentTitle]}</h1>
      </div>
    )
  };
  itemClick (index) {
    this.setState({
      currentTitle: index
    })
    console.log(this.state)
  }
}
