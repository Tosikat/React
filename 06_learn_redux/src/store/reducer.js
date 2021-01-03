import { reducer as countReducer } from './count'
import { reducer as multidataReducer } from './multidata'
import { combineReducers } from "redux";

// 手动执行的函数
// function reducer(state = {}, action) {
//   return {
//     countInfo: countReducer(state.countInfo, action),
//     multidataInfo: multidataReducer(state.multidataInfo, action)
//
//   }
// }
const reducer = combineReducers({
  countInfo: countReducer,
  multidataInfo: multidataReducer
})

export default reducer;
