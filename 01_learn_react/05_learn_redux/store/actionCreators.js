import {ADD_NUMBER, RES_NUMBER} from "./constants.js";

export const incAction = num =>
  ({
    type: ADD_NUMBER,
    num
  })

export const decAction = num =>
  ({
    type: RES_NUMBER,
    num
  })
