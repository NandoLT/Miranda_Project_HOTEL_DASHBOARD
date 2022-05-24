
import { UPDATE_NAME, UPDATE_EMAIL, UPDATE_AUTH } from './authActionsTypes';
import storage from '../utils/storage';

const { id, email, photo, name_surname, contact, descriptipn, role, status } = storage.get('userData');

export const initialState = {
    id: id ? id :'no user id',
    email: email ? email :'no user email',
    photo: photo ? photo :'no user photo',
    name_surname: name_surname ? name_surname :'no name and surname',
    contact: contact ? contact :'no user contact',
    description: descriptipn ? descriptipn :'no user description',
    role: role ? role :'no user role',
    status: status ? status :'no user status',
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

