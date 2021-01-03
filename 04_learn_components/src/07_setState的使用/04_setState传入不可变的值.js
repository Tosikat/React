import React, { PureComponent} from 'react';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      friends: [
        {name: 'Alen', age: 18},
        {name: 'Akeman', age: 19},
        {name: 'Alice', age: 20}]
    };
  }
  render()
  {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return(
                <li key={index}>
                  姓名:{item.name}--年龄：{item.age}
                  <button onClick={e => this.addAge(index)}>年龄+1</button>
                </li>

              )
            })
          }
        </ul>
        <button onClick={event => this.addFriends()}>增加朋友</button>
      </div>
    );
  }
  addAge (index) {
    const newFriend = [...this.state.friends];
    newFriend[index].age += 1
    this.setState({
      friends: newFriend
    })
  }


  addFriends () {
  //  保存数组地址在内存中 不改变state中的值 shouldComponentUpdata验证 返回true 不会重新执行render函数
  //   this.state.friends.push({name: 'lijun', age: '22'})
  //   this.setState({
  //     friends: this.state.friends
  //   })
    const data = {name: 'lijun', age: 22}
    const newFriend = [...this.state.friends,data]
    this.setState({
      friends: newFriend
    })
  }
}

export default App ;
