import {booking_data as loadAllBookings} from '../../DataMocks/booking_data'

export const addBooking = (booking) => {
    return {
        type: 'bookings/addBooking',
        payload: booking
    }
}

export const removeBooking = (bookingId) => {
    return {
        type: 'bookings/removebooking',
        payload: bookingId
    }
}

export const updateBooking = (booking) => {
    return {
        type: 'bookings/updateBooking',
        payload: booking
    }
}

export const allBookings = () => {
    return {
        type: 'bookings/allBookings',
        payload: loadAllBookings
    }
}

export const viewBooking = (bookingId) => {
    return {
        type: 'bookings/viewBooking',
        payload: bookingId
    }
}

const initialState = [];

export const bookingsReducer = ( bookings = initialState, action ) => {
    switch (action.type) {
        case 'bookings/addBooking':
            return [...bookings, action.payload];
        case 'bookings/removeBooking':
            return bookings.filter(booking => booking.id !== action.payload);
        case 'bookings/updateBooking':
            return [...bookings, action.payload];
        case 'bookings/allBookings':
            return [...bookings, action.apyload];
        case 'bookings/viewBooking':
            return bookings.filter(booking => booking.id === action.payload);
        default:
            return bookings
    }
}

export const selectBookings = state => state.bookings;