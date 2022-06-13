import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings, inProgressBookings, checkInBookings, checkOutBookings ,bookingsListData } from '../../features/bookings/bookingsSlice';
import { DataTable } from '../commons/DataTable';

export const Booking = () => {

    
    let bookings = useSelector(bookingsListData);
    const dispatch = useDispatch();

    console.log('BOOKINGS', bookings)

    const bookingssToTable = bookings.map(booking => {
        const bookingInfo = {
            Guest: booking.guest,
            Order_Date: booking.order_date,
            Check_In: booking.check_in,
            Check_Out: booking.check_out,
            Special_Request: booking.sècial_request,
            Room_Type: booking.room_type,
            Status: booking.status
        }
        return bookingInfo;
    })

    useEffect( () => {
        dispatch(fetchBookings());
    },[dispatch]);

    const allBookings = () => {
        dispatch(fetchBookings());
    }
    const onlyInProgress = () => {
        dispatch(inProgressBookings());
    }
    const onlyCheckIn = () => {
        dispatch(checkInBookings());
    }
    const onlyCheckOut = () => {
        dispatch(checkOutBookings());
    }

    return (
        <>
            <div>
                <h1> BOOOKING COMPONENT</h1>
            </div>
            <hr/>
            <div className="btns-collection">
                <div className="btns-filter">
                    <button className="button-filter" onClick={ allBookings }>All Bookings</button>
                    <button className="button-filter" onClick={ onlyInProgress }>Show In Progress</button>
                    <button className="button-filter" onClick={ onlyCheckIn }>Show Check In</button>
                    <button className="button-filter" onClick={ onlyCheckOut }>Show Check Out</button>
                </div>
                <div className="btns-actions">
                    <button className="button-add-item" onClick={()=> ''}>+ New Employee</button>
                    <select className="select-order-filter">
                        <option value='1'>Newest</option>
                        <option value='2'>Older</option>
                    </select>
                </div>
            </div>
            <DataTable tableInfo={bookingssToTable}/>
        </>
    )
}
