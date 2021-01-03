import React, {useState} from 'react';

function ComplexState() {
  const [friends, setFriends] = useState(['Tosikat', 'Lijun', 'Alias', 'Alen'])
  const [students, setStudents] = useState([
    { name: 'recommend', price: 200},
    { name: 'swiper', price: 100},
    { name: 'navbar', price: 150}
  ])

  function addFriends () {
    friends.push('Lux');
    setFriends(friends);
    // 复杂数据类型保存内存地址， 改变值地址未改变 render函数不会重新执行
    console.log('push执行')
  }

  function addPrice (index) {
    const newStudents = [...students];
    newStudents[index].price += 10;
    setStudents(newStudents);
  }
  return (
    <div>
      <ul>
        {
          friends.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
      <button onClick={ e => setFriends([...friends, 'Jax'])}>Hock添加</button>
      <button onClick={ e => addFriends() }>Push添加</button>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={index}>
                {item.name}--{item.price}
                <button onClick={e => addPrice(index)}>price + 10</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ComplexState;
