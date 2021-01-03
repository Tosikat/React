import React, {useState} from 'react';

function  States () {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [obj] = useState({name: 'Tosikat', age: 22});
  const [arr] = useState([1, 2, 3, 4, 5]);
  return (
    <div>
      <h3 onClick={e => setCount(count + 1)}>{count}</h3>
      <h3 onClick={e => setAge(age + 1)}>{age}</h3>
      <h3>{obj.name}--{obj.age}</h3>
      <ul>
        {
          arr.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>

    </div>
  );
}

export default States;
