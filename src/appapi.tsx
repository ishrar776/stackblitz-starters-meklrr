// import Axios from 'axios';
// export default Axios.create({
//   baseURL: '../images',
// });
// export const allProduct = async () => {
//   const response = await Axios.get('../images/data.json');
//   return response.data;
// };
import React, { useEffect } from 'react';
export const allProduct = async () => {
  const url = '../images/data.json';
  await useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }, []);
};
