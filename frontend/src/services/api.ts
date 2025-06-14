import axios from 'axios';
import AuthService from './auth.service';
import type { User } from '../types/user';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const user = AuthService.getCurrentUser();
    if (user && user.token) {
      config.headers['Authorization'] = 'Bearer ' + user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = {
  users: {
    getAll: async (): Promise<User[]> => {
      const response = await apiClient.get<User[]>('/users');
      return response.data;
    },
    
    getById: async (id: number): Promise<User> => {
      const response = await apiClient.get<User>(`/users/${id}`);
      return response.data;
    },
    
    delete: async (id: number): Promise<void> => {
      await apiClient.delete(`/users/${id}`);
    }
  }
};

export default apiClient; 