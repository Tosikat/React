const redux = require('redux');
const initialState = {
  count: 0
}
// 定义一个纯函数联系store
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'ADD_NUMBER':
      return { ...state, count: state.count + action.num }
    case 'RES_NUMBER':
      return { ...state, count: state.count + action.num }
    case 'SUB_NUMBER':
      return { ...state, count: state.count + action.num }
    default:
      return  state ;
  }
}


// store
const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log("counter: ", store.getState().count)
})


const action1 = { type: 'INCREMENT' };
const action2 = { type: 'DECREMENT' };
const action3 = { type: 'ADD_NUMBER', num: 5 };
const action4 = { type: 'RES_NUMBER', num: -8 };
const action5 = { type: 'SUB_NUMBER', num: 12 };

// 派发action

store.dispatch(action1);
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
store.dispatch(action5)

