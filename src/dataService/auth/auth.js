import client from '../client';
import storage from '../../utils/storage';
import { configureClient, resetClient } from "../client";

const authPath = 'users'

export const login = async (credentials) => {
    const response = await  client.post(`${authPath}/login`, credentials);

    // client.post(`${authPath}/login`, credentials)
    //     .then(({ token }) => token )
    //     .then(token => {
    //         configureClient(token);
    //         storage.set('authToken', token, true);
    //     })
    //     .catch(error => {
    //         console.log('ERROR', error);
    //         return error
    //     })
    return response;
}

export const register = (credentials) => {
    client.post(`${authPath}/register`, credentials);
}

export const logout = () => {
    return Promise.resolve()
        .then(() => {
            resetClient();
            storage.remove('authToken');
    });
};