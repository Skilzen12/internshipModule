import axios from 'axios';
import {API_ENDPOINT} from '../AdminServices/baseURL'
import { getItem } from '../utility/localStorageControl';

const token = getItem('accessToken');
const axiosInstance = axios.create({
  baseURL : API_ENDPOINT,
  headers: token ? {
    'Authorization': `Token ${token}`,
  } : null
});
export default axiosInstance;