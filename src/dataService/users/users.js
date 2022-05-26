import client from '../client';


const usersPath = 'users';

export const getUsers = async () => {
    const response = await client.get(`${usersPath}/`);
    return response;
}

export const getUser = async (id) => {
    const response = await client.get(`${usersPath}/${id}`);
    return response;
}