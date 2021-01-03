import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: ['Java', 'Rube', 'TypeScript', 'C#']
    };
  }
  render()
  {
    return (
      <div>
        <h1>编程语言</h1>
        <ul>
          {
            this.state.language.map( (item, index) => {
              return <li key={index} >{item}</li>
            })
          }
          <button onClick={event => {this.itemClick()}}>点击增加</button>
        </ul>
      </div>
    );
  }

  itemClick () {
    this.setState({
      language: [...this.state.language,'HTML5']
    })
  }
}

export default App ;
