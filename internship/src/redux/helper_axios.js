import axios from 'axios';
import {API_ENDPOINT} from '../AdminServices/baseURL'

const token = window.localStorage.getItem('accessToken')

const axiosInstance = axios.create({
  baseURL : API_ENDPOINT,
  headers: token ? {
    'Authorization': `Token ${token}`,
  } : null
});
export default axiosInstance;