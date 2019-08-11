import axios from 'axios';

// Acessa a api
const api = axios.create({
    baseURL: 'http://localhost:3030'
});

export default api;