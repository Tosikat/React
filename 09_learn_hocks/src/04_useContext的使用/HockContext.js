import React, { useContext } from 'react';

import { UseContext, ThemeContext } from '../App';

function HockContext(props) {
  const user = useContext(UseContext);
  const theme = useContext(ThemeContext);
  // 传入一个context对象

  console.log(user, theme, props)
  return (
    <div>
      <h1>UserContext</h1>
    </div>
  );
}

export default HockContext;
