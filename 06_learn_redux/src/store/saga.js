// eslint-disable-next-line
import { takeEvery, put, all, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import { FETCH_MULTIDATA } from "./multidata/constants";
// 拦截的数据
import { changeBanner, changeRecommend } from './multidata/actionCreators'


function* fetchMultiData (action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata');
  const banners = res.data.data.banner.list;
  const recommend = res.data.data.recommend.list;
  // yield put(changeBanner(banners))
  // yield put(changeRecommend(recommend));
//  内部实现循环 done为false继续执行
  yield all([
    yield put(changeBanner(banners)),
    yield put(changeRecommend(recommend))
  ])
}


function* mySaga() {
  // 传入的是需要监听的事件
  // takeLatest 一次只监听每个action
  // takeEvery 可以监听多个
  yield takeEvery(FETCH_MULTIDATA, fetchMultiData)

  // yield all([
  //   takeLatest(FETCH_MULTIDATA, fetchMultiData),
  //   takeLatest(FETCH_MULTIDATA, fetchMultiData),
  // ])
}

export default mySaga;
