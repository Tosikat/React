import React, {PureComponent} from 'react';

class App extends PureComponent {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      fruits: 'orange'
    };
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={event => this.handerSubmit(event)}>
          <select
            name=""
            value={this.state.fruits}
            id="" onChange={event => this.handerSelect(event)}>
            <option value="apple">苹果</option>
            <option value="orange">橙子</option>
            <option value="banana">香蕉</option>
          </select>
        </form>
      </div>
    );
  }

  handerSelect (event) {
    event.preventDefault();
    console.log(event.target)
    this.setState({
      fruits: event.target.value
    })
    console.log(event.target.value)
  }

}

export default App;
