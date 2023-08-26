import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from './action/productAction';
import './style.css';
export default function Bapp(props) {
  //const [point, SetPoint]=useState('');
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.productReducer);
  //useEffect(() => {
  //dispatch(fetchProduct());
  //  props.name
  //}, [name]);
  return (
    <div>
      <h1>second</h1>
      <p>SeconndComponent</p>
      <p>values via pros is {props.name}</p>
    </div>
  );
}
