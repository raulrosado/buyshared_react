import axios from 'axios';
import config from '../config/config'

const axiosInstance = axios.create({baseURL:config.URL})

export default axiosInstance;

