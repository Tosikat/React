import React, {Component} from 'react';

function ChildCpn (props) {
  const { name, age, hobbies } = props;
  return (
    <h1>{name + age + hobbies}</h1>
  )
}

export default class App extends Component {
  render()
  {
    return (
      <div>
        <ChildCpn name="lijun" age="22" hobbies="query"/>
        <ChildCpn name="Tosikat" age="18" hobbies="cake"/>
      </div>
    );
  }
}

