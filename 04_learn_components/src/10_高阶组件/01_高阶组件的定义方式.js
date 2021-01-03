import React, {PureComponent} from 'react';

function enhanceRegionProps(WrapperdComponet) {
  return props => {
    return <WrapperdComponet {...props} region="China"/>
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>name:{this.props.name}--age:{this.props.age}--{this.props.region}</h1>
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h1>name:{this.props.name}--age:{this.props.age}--{this.props.region}</h1>
      </div>
    )
  }
}

const HomeEnhance = enhanceRegionProps(Home);
const ProfileEnhance = enhanceRegionProps(Profile);

class App extends PureComponent {
  render()
  {
    return (
      <div>
        <h1>App</h1>
        <HomeEnhance name="lijun" age="22"/>
        <ProfileEnhance name="Tosikat" age="18"/>
      </div>
    );
  }
}


export default App ;
