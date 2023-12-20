import axios from 'axios';

const axiosInstanceAuth = axios.create({
    baseURL: 'http://localhost:8081/api',
    withCredentials: true, // To include cookies in requests
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers if required
    }
});

export default axiosInstanceAuth;
