/**
 * axios setup to use mock service
 */

import axios from 'axios';

const api = axios.create({
  baseURL: "https://test-api.yarhis.ir"});

// interceptor for http
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default api;
