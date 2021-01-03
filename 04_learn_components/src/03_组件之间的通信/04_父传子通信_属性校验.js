import React, {Component} from 'react';
import PropTypes from 'prop-types';

function ChildCpn (props) {
  const { name, age, hobbies,js } = props;
  return (
    <div>
      <h2>{name + age + hobbies}</h2>
      <ul>
        {
          js.map(item => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,// 要求必须传入
  age: PropTypes.number,
  hobbies: PropTypes.string,
  js: PropTypes.array
}

ChildCpn.defaultProps = {
  name: 'A',
  age: 12,
  hobbies: 'C',
  js: [1]
}

class ChildCpn2 extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.cpn}</div>
    )
  }

  //es6中class fieds的写法
  static propTypes = {

  }
  static defaultProps = {
    cpn: 123456
  }
}


export default class App extends Component {
  render()
  {
    return (
      <div>
        <ChildCpn  age={22} hobbies="query" js={[1,2,4,5]}/>
        <ChildCpn name="Tosikat" age={18} hobbies="cake" js={[1,2,4,5]}/>
        <ChildCpn/>
        <ChildCpn2 cpn="子组件2"/>
        <ChildCpn2/>
      </div>
    );
  }
}

