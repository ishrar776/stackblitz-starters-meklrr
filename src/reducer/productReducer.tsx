import { ActionTypes } from '../action/action-type';
const intialState = {
  products: [],
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    /*case ActionTypes.FETCH_PRODUCT_REQUESTED:
            return {...state};*/
    case ActionTypes.FETCH_PRODUCT_SUCESS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
