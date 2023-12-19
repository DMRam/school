import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true, // To include cookies in requests
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers if required
    }
});

export default api;
