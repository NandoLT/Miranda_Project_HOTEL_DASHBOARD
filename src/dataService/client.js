import axios from 'axios'

const client = axios.create({ 
    baseURL: process.env.REACT_APP_API_BASEURL 
});

const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
};

const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
};

client.interceptors.response.use(

    response => response,

    error => {
        // if (!error.response) {
        //     console.log('ERROR', error.error);
        //     return Promise.reject({ message: error.message });
        // }

        return Promise.reject(error.response.data);
        // return Promise.reject({
        //     message: error.response.statusText,
        //     statusCode: error.response.status,
        //     ...error.response.data,
        // });
    }
);

export const configureClient = ( accessToken ) => {
    if (accessToken) {
        setAuthorizationHeader(accessToken);
    }
};

export const resetClient = () => {
    removeAuthorizationHeader();
};


export default client;