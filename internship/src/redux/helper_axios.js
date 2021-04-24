import axios from 'axios';
import {API_ENDPOINT} from '../AdminServices/baseURL'
import store from './store'

const token = store.getState().auth.token;
console.log(token);
const axiosInstance = axios.create({
  baseURL : API_ENDPOINT,
  headers:{
    'Authorization': token?`Token ${token}`:'',
  }
});
export default axiosInstance;