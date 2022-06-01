import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRooms, getRoom } from '../../dataService/rooms/rooms';


const initialState = {
    roomsList: [],
    roomsFiltereds: [],
    status: 'idle'
}

// Thunk functions
export const fetchRooms = createAsyncThunk('get/allRooms', async () => {
    const { data } = await getRooms();
    return data.result;
});

export const fetchRoom = createAsyncThunk('get/singleRooms', async () => {
    const { data } = await getRoom();
    return data.result;
});


// Create Slice

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducer:{
        availableRooms: (state) => {
            state.roomsFiltereds = state.roomsList.filter(room => room.status === 'AVAILABLE');
        },
        bookedRooms: (state) => {
            state.roomsFiltereds = state.roomsList.filter(room => room.status === 'BOOKED');
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = 'succes';
                state.roomsList = action.payload;
                state.roomsFiltereds = action.payload;
            })
            .addCase(fetchRooms.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { availableRooms, bookedRooms } = roomsSlice.actions;
export const roomsListData = (state) => state.rooms.roomsFiltereds;
export default roomsSlice.reducer;
