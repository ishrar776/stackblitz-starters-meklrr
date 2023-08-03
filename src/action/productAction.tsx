//import Axios from "axios";
import appapi from '../appapi';
import { ActionTypes } from './action-type';
export const fetchProducts = () => async (dispatch) => {
  const response = await appapi.get('/data.json');
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
//done for redux saga
export const fetchProduct = (products) => {
  // return {type : ActionTypes.FETCH_PRODUCT_REQUESTED,payload : products};
  return { type: ActionTypes.FETCH_PRODUCT_REQUESTED };
};
export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
