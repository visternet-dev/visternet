/**
 * axios setup to use mock service
 */

import axios from 'axios';

const api = axios.create({
  baseURL: "https://test-admin.yarhis.ir/visternet-site"});

// interceptor for http
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export default api;
