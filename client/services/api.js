import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const authService = {
    login: async (email, password) => {
        const response = await api.post('/users/login', { email, password });
        return response.data;
    },
    register: async (userData) => {
        const response = await api.post('/users/register', userData);
        return response.data;
    }
};

export const requestService = {
    getAll: async () => {
        const response = await api.get('/requests');
        return response.data;
    },
    create: async (requestData) => {
        const response = await api.post('/requests', requestData);
        return response.data;
    }
};

export default api;
