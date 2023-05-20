import axios from 'axios';

const ApiBarfer = axios.create({
    baseURL:'http://192.168.1.26:3000/api',
    headers: {
        'Content-type':'application/json'
    }
});

export {ApiBarfer};