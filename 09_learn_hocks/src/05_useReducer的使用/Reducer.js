export default function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return{ ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1}
    case 'changeState':
      return { ...state, isLogin: !state.isLogin }
    default:
      return state;
  }
}
// 仅仅是对useState的方法放在一个中
