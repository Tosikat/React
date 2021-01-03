import axios from "axios";
import {
   RECOMMAND, BANNER, FETCH_MULTIDATA
} from "./constants.js";

export const changeBanner = banner =>
  ({
    type: BANNER,
    banner
  })

export const changeRecommend = recommend =>
  ({
    type: RECOMMAND,
    recommend
  })

// getState 依赖state中的其他数据
export const getAxiosData = ( dispatch, getState) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    console.log(data);
    dispatch(changeBanner(data.banner.list))
    dispatch(changeRecommend(data.recommend.list))
    //  home中请求， about中渲染
  })
}

//redux-saga
export const fetchMultiData = {
  type: FETCH_MULTIDATA,
}
