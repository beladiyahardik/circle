// src/api/index.ts

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { BASE_URL } from '../config/envConfig';

// 🔹 Create typed axios instance
const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    key: '', // Placeholder for API key, can be set dynamically later
  },
});

// 🔹 Response interceptor (typed)
API.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  },
);

export default API;
