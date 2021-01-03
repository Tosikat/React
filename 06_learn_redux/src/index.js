import React from 'react';
import ReactDOM from 'react-dom';
// import { StoreContext } from './untils/context'
import { Provider } from 'react-redux'
import store from './store/index';
import App from './App';

// ReactDOM.render(
//   <StoreContext.Provider value={store}>
//     <App />
//   </StoreContext.Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
