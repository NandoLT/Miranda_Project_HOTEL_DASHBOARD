import client from '../client';


const usersPath = 'rooms';

export const getRooms = async () => {
    const response = await client.get(`${usersPath}/`);
    return response;
}

export const getRoom = async (id) => {
    const response = await client.get(`${usersPath}/${id}`);
    return response;
}