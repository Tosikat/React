import React, {PureComponent, createRef} from 'react';

class App extends PureComponent {
  // eslint-disable-next-line
  constructor() {
    super();
    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={event => this.handerSubmit(event)}>
          <label htmlFor="username">Username:
            <input type="text"
                   id="username"
                   ref={this.usernameRef}
            />
            <input type="submit" value="submit"/>
          </label>
        </form>
      </div>
    );
  }


  handerSubmit (event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value)
  }
}

export default App;
