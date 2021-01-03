import store from "./store/index.js"
import { incAction, decAction} from "./store/actionCreators.js"

store.subscribe(() => {
  console.log({"counter": store.getState().count})
})

store.dispatch(incAction(10));
store.dispatch(decAction(-8));
store.dispatch(incAction(12));
