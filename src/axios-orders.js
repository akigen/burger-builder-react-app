import axios from 'axios';

const instance = axios.create({
    baseURL: 'firebase_url'
});

export default instance;