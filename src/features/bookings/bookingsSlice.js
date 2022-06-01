import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBookings, getBooking } from '../../dataService/bookings/bookings';

const initialState = {
    bookingsList:[],
    bookingsFiltereds:[],
    status: 'idle'
}

// Thunk functions
export const fetchBookings = createAsyncThunk('get/allBookings', async () => {
    const { data } = await getBookings();
    return data.result;
});

export const fetchBooking = createAsyncThunk('get/singleBooking', async () => {
    const response = await getBooking();
    return response.data.result;
});

// Create Slice
export const bookingsSlice = createSlice({
    name: 'bookings', 
    initialState,
    reducers: {
        inProgressBookings: (state) => {
            state.bookingsFiltereds = state.bookingsList.filter(booking => booking.status === 'IN PROGRESS');
        },
        checkInBookings: (state) => {
            state.bookingsFiltereds = state.bookingsList.filter(booking => booking.status === 'CHECK IN');
        },
        checkOutBookings: (state) => {
            state.bookingsFiltereds = state.bookingsList.filter(booking => booking.status === 'CHECK OUT');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBookings.pending, (state, ) => {
                state.status = 'loading';
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = 'succes';
                state.bookingsList = action.payload;
                state.bookingsFiltereds = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, ) => {
                state.status = 'failed';
            })
    }
});

export const { inProgressBookings, checkInBookings, checkOutBookings } = bookingsSlice.actions;
export const bookingsListData = (state) => state.bookings.bookingsFiltereds;
export default bookingsSlice.reducer;