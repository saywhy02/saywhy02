import axios from 'axios';

const request = axios.create({
    baseURL: 'http://192.168.104.217:8280',
});
export default request;
