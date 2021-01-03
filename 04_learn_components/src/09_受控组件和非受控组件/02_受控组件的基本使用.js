import React, {PureComponent} from 'react';

class App extends PureComponent {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={event => this.handerSubmit(event)}>
        <label htmlFor="username">Username:
          <input type="text"
                 id="username"
                 name="username"
                 onChange={event => this.handerform(event)}
                 value={this.state.username}/>
          <input type="submit" value="submit"/>
        </label>
        </form>
      </div>
    );
  }

  handerform (event) {
    event.preventDefault();
    this.setState({
      username: event.target.value
    })
    console.log(event.target.value)
  }

  handerSubmit () {

  }
}

export default App;
