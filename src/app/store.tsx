import { createStore, combineReducers } from "redux";
import { roomsReducer } from "../features/rooms/roomsSlice";
import { usersReducer } from "../features/users/usersSlice";
import { bookingsReducer } from "../features/bookings/bookingsSlice";

const slices = {
    rooms: roomsReducer,
    users: usersReducer,
    bookings: bookingsReducer
};

export const store = createStore(combineReducers(slices));