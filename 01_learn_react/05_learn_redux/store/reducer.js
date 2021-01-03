import { ADD_NUMBER, RES_NUMBER} from "./constants.js";

const initialState = {
  count: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case RES_NUMBER:
      return { ...state, count: state.count - action.num }
    default:
      return  state ;
  }
}
