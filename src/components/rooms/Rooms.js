import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms, availableRooms, bookedRooms, roomsListData } from '../../features/rooms/roomsSlice';
import { DataTable } from '../commons/DataTable';

export const Rooms = () => {

    let rooms = useSelector(roomsListData);
    const dispatch = useDispatch();

    const roomsToTable = rooms.map (room => {
        console.log('FACILITIES',room.facilities)
        const roomInfo = {
            Room_Name: room.bed_type,
            Room_Number: room.room_number,
            Facilities: room.facilities.join(', '),
            Rate: room.rate,
            Status: room.status
        }
        return roomInfo
    });

    useEffect(() => {
        dispatch(fetchRooms());
    }, [dispatch]);

    const allEmployees = () => {
        dispatch(fetchRooms());
    }
    const onlyActive = () => {
        dispatch(availableRooms());
    }
    const onlyInactive = () => {
        dispatch(bookedRooms());
    }

    return (
        <>
            <div>
                <h1> ROOMS COMPONENT</h1>
            </div>
            <hr/>
            <div className="btns-collection">
                <div className="btns-filter">
                    <button className="button-filter" onClick={ allEmployees }>All Employees</button>
                    <button className="button-filter" onClick={ onlyActive }>Show Actives</button>
                    <button className="button-filter" onClick={ onlyInactive }>Show Inactives</button>
                </div>
                <div className="btns-actions">
                    <button className="button-add-item" onClick={()=> ''}>+ New Employee</button>
                    <select className="select-order-filter">
                        <option value='1'>Newest</option>
                        <option value='2'>Older</option>
                    </select>
                </div>
            </div>
            <DataTable tableInfo={roomsToTable} />
        </>
    )
}
