
import { UPDATE_NAME, UPDATE_EMAIL, UPDATE_AUTH } from './authActionsTypes';
import storage from '../utils/storage';

export const initialState = {
    name: storage.get('name') ? storage.get('name') : 'no user logged',
    email: storage.get('email') ? storage.get('email') :'no user email',
    auth: storage.get('auth') ? storage.get('auth') : false
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {...state, name: action.value};
        case UPDATE_EMAIL:
            return {...state, email: action.value};
        case UPDATE_AUTH:
            return { ...state, auth: action.value};
        default:
            return state;
    }
}

