import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => API.post('/auth/login', credentials),
  register: (userData) => API.post('/auth/register', userData),
};

export const applicationAPI = {
  create: (applicationData) => API.post('/applications', applicationData),
  getAll: () => API.get('/applications'),
  getById: (id) => API.get(`/applications/${id}`),
  update: (id, applicationData) => API.put(`/applications/${id}`, applicationData),
  delete: (id) => API.delete(`/applications/${id}`),
};

export default API;
