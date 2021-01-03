import { createStore, applyMiddleware, compose } from 'redux'
import saga from "./saga";
// 使用中间件的函数应用中间件
import reducer from "./reducer.js"
import thunk from "redux-thunk";
import createSaga from "redux-saga";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

const sageInstance = createSaga();
const thunkInstance = applyMiddleware(thunk, sageInstance);
const store = createStore(reducer, composeEnhancers(thunkInstance));

sageInstance.run(saga);

export default store;
