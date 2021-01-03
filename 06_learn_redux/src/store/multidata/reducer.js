import {
   BANNER, RECOMMAND
} from "./constants.js";

const MultidataDefault = {
  banner: [],
  recommend: []
}

function multidataReducer (state = MultidataDefault, action) {
  switch (action.type) {
    case BANNER:
      return {...state, banner: action.banner}
    case RECOMMAND:
      return {...state, recommend: action.recommend}
    default:
      return state;
  }
}

export default multidataReducer;
