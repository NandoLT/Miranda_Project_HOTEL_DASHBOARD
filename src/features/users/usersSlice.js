// import {users_data as loadAllUsers} from '../../DataMocks/users_data'

// export const addUser = (user) => {
//     return {
//         type: 'users/addUser',
//         payload: user
//     }
// }

// export const removeUser = (userId) => {
//     return {
//         type: 'users/removeUser',
//         payload: userId
//     }
// }

// export const updateUser = (user) => {
//     return {
//         type: 'users/updateUser',
//         payload: user
//     }
// }

// export const allUsers = (users) => {
//     return {
//         type: 'users/allUsers',
//         payload: users
//     }
// }

// export const viewUser = (userId) => {
//     return {
//         type: 'users/viewUser',
//         payload: userId
//     }
// }

// const initialState = [];

// export const usersReducer = ( users = initialState, action ) => {
//     switch (action.type) {
//         case 'users/addUser':
//             return [...users, action.payload];
//         case 'users/removeUser':
//             return users.filter(user => user.id !== action.payload);
//         case 'users/updateUser':
//             return [...users, action.payload];
//         case 'users/allUsers':
//             return [...users, action.payload];
//         case 'users/viewUser':
//             return users.filter(user => user.id === action.payload);
//         default:
//             return users
//     }
// }

// export const selectUsers = state => state.users;

import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from '@reduxjs/toolkit';
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
// export const usersListData = (state) => state.users.userList;
export const usersListData = (state) => state.users.usersFiltereds;
export default usersSlice.reducer;