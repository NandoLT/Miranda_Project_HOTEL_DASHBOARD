// import { createStore, combineReducers } from "redux";
// import { roomsReducer } from "../features/rooms/roomsSlice";
// import { usersReducer } from "../features/users/usersSlice";
// import { bookingsReducer } from "../features/bookings/bookingsSlice";

// const slices = {
//     rooms: roomsReducer,
//     users: usersReducer,
//     bookings: bookingsReducer
// };

// export const store = createStore(combineReducers(slices));

import { configureStore } from '@reduxjs/toolkit';

import  usersReducer  from '../features/users/usersSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        //otro: otroReducer
        //otro: otroReducer
        //otro: otroReducer
    }
});

export default store;