import { configureStore } from '@reduxjs/toolkit';

import  usersReducer  from '../features/users/usersSlice';
import  roomsReducer from '../features/rooms/roomsSlice';
import  bookingsReducer from '../features/bookings/bookingsSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        rooms: roomsReducer,
        bookings: bookingsReducer
        //otro: otroReducer
    }
});

export default store;