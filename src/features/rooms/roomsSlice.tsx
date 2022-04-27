import {rooms_data as loadAllRooms} from '../../DataMocks/rooms_data'

export const addRoom = (room) => {
    return {
        type: 'rooms/addRoom',
        payload: room
    }
}

export const removeRoom = (roomId) => {
    return {
        type: 'rooms/removeRoom',
        payload: roomId
    }
}

export const updateRoom = (room) => {
    return {
        type: 'rooms/updateRoom',
        payload: room
    }
}

export const allRooms = () => {
    return {
        type: 'rooms/allRooms',
        payload: loadAllRooms
    }
}

export const viewRoom = (roomId) => {
    return {
        type: 'rooms/viewRoom',
        payload: roomId
    }
}

const initialState = [];

export const roomsReducer = ( rooms = initialState, action ) => {
    switch (action.type) {
        case 'rooms/addRoom':
            return [...rooms, action.payload];
        case 'rooms/removeRoom':
            return rooms.filter(room => room.id !== action.payload);
        case 'rooms/updateRoom':
            return [...rooms, action.payload];
        case 'rooms/allRooms':
            return [...rooms, action.apyload];
        case 'rooms/viewRoom':
            return rooms.filter(room => room.id === action.payload);
        default:
            return rooms
    }
}

export const selectRooms = state => state.rooms;