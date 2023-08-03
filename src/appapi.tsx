import Axios from 'axios';

export default Axios.create({
  baseURL: '../images',
});

export const allProduct = async () => {
  const response = await Axios.get('../images/data.json');
  return response.data;
};
