import {users_data as loadAllUsers} from '../../DataMocks/users_data'

export const addUser = (user) => {
    return {
        type: 'users/addUser',
        payload: user
    }
}

export const removeUser = (userId) => {
    return {
        type: 'users/removeUser',
        payload: userId
    }
}

export const updateUser = (user) => {
    return {
        type: 'users/updateUser',
        payload: user
    }
}

export const allUsers = () => {
    return {
        type: 'users/allUsers',
        payload: loadAllUsers
    }
}

export const viewUser = (userId) => {
    return {
        type: 'users/viewUser',
        payload: userId
    }
}

const initialState = [];

export const usersReducer = ( users = initialState, action ) => {
    switch (action.type) {
        case 'users/addUser':
            return [...users, action.payload];
        case 'users/removeUser':
            return users.filter(user => user.id !== action.payload);
        case 'users/updateUser':
            return [...users, action.payload];
        case 'users/allUsers':
            return [...users, action.apyload];
        case 'users/viewUser':
            return users.filter(user => user.id === action.payload);
        default:
            return users
    }
}

export const selectUsers = state => state.users;