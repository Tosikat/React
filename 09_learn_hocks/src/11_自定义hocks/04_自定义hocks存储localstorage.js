import React from 'react';
import useLocalStorage from "../hocks/HockLocalStorage";

function Index(props){
  const [name, setName] = useLocalStorage('name');
  return (
    <div>
      <h1>当前LocalStorage: {name} </h1>
      <button onClick={ e => setName('Tosikat')}>设置name</button>
    </div>
  );
}

export default Index ;
