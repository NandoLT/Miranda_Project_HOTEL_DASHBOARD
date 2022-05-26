import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, getUser } from '../../dataService/users/users';

const initialState = {
    userList:[],
    usersFiltereds:[],
    status: 'idle'
}


// Thunk functions
export const fetchUsers = createAsyncThunk('get/allUsers', async () => {
    const { data } = await getUsers();
    return data.result;
});

export const fetchUser = createAsyncThunk('get/singleUser', async () => {
    const response = await getUser();
    return response.data.result;
});

// Create Slice
export const usersSlice = createSlice({
    name: 'users', 
    initialState,
    reducers: {
        activeEmployees: (state) => {
            state.usersFiltereds = state.userList.filter(user => user.status !== 'INACTIVE');
        },
        inactiveEmployees: (state) => {
            state.usersFiltereds = state.userList.filter(user => user.status !== 'ACTIVE');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succes';
                state.userList = action.payload;
                state.usersFiltereds = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
            })
            .addCase(fetchUser.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succes';
                state.userList = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
});

export const { activeEmployees, inactiveEmployees } = usersSlice.actions;
export const usersListData = (state) => state.users.usersFiltereds;
export default usersSlice.reducer;