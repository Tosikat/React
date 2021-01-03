import React, {Component} from 'react';

function NavBar (props) {
  console.log(props)
  return (
    <div>
      <h2>{props.nickname}</h2>
      <h2>{props.level}</h2>
    </div>
  )
}

class Profile extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Profile组件</h2>
        <NavBar {...this.props}/>
      </div>
    )
  }
}

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'Tosikat',
      level: 8
    };
  }

  render()
  {
    // const {nickname, level} = this.state;
    return (
      <div>
        <h1>App</h1>
        {/*<Profile nickname={nickname} level={level}/>*/}
        <Profile {...this.state}/>
      </div>
    );
  }
}

export default App ;
