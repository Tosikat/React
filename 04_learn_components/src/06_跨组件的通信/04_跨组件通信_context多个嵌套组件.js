import React, {Component} from 'react';


function NavBar (){
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
               theme => {
                 return (
                   <div>
                     <h2 style={{color: theme.color}}>{value.nickname}</h2>
                     <h2>{value.level}</h2>
                   </div>
                 )
               }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile组件</h2>
        <NavBar />
      </div>
    )
  }
}


const UserContext = React.createContext({
  // 内部设置默认值 可有可无 当UserContext.Provider组件中不包含任何子组件时  在调用UserContext组件中会调用默认值
  nickname: 'lijun',
  level: 0
})

const ThemeContext = React.createContext({
  color: 'red'
})

class App extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
    this.state = {
      nickname: 'Tosikat',
      level: 8
    };
  }

  render()
  {
    return (
      <div>
        <h1>App</h1>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color: "red"}}>
            <Profile/>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App ;
