import axios from 'axios';
import { store } from '../store/store';

const axiosInstance = axios.create({
  baseURL: `https://spring-service-backend.herokuapp.com`,
});

axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.auth.idToken;
  config.headers.Authorization = token;
  config.params = config.params || {};
  config.params['auth'] = token;
  return config;
});

export default axiosInstance;
