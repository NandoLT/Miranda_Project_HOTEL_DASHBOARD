import client from '../client';


const usersPath = 'bookings';

export const getBookings = async () => {
    const response = await client.get(`${usersPath}/`);
    return response;
}

export const getBooking = async (id) => {
    const response = await client.get(`${usersPath}/${id}`);
    return response;
}