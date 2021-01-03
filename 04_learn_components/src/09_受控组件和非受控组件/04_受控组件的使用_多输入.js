import React, {PureComponent} from 'react';

class App extends PureComponent {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      validate: ''
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
          </label>
          <br/>

          <label htmlFor="password">Password:
            <input type="text"
                   id="password"
                   name="password"
                   onChange={event => this.handerform(event)}
                   value={this.state.password}/>
          </label>
          <br/>

          <label htmlFor="validate">Validate:
            <input type="text"
                   id="validate"
                   name="validate"
                   onChange={event => this.handerform(event)}
                   value={this.state.validate}/>
          </label>
          <br/>

          <input type="submit" value="submit"/>

        </form>
      </div>
    );
  }

  handerform (event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(event.target.value)
  }
  handerSubmit (event) {
    event.preventDefault();
    console.log(this.state)
  }
}

export default App;
