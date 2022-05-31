import axios from 'axios';
import storage from '../utils/storage';

const token = storage.get('authToken') ? storage.get('authToken') : null;

const client = axios.create({ 
    baseURL: process.env.REACT_APP_API_BASEURL 
});

// const setAuthorizationHeader = token => {
//     console.log('TOKEN2', token)
//     client.defaults.headers.common['Authorization'] = `${ token }`;
// };

const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
};

client.interceptors.request.use(req => {
    req.headers.Authorization = `${token}`;
    return req;
});


client.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response.data);
    }
);


export const resetClient = () => {
    removeAuthorizationHeader();
};


export default client;