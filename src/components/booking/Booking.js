import React from 'react';
import { booking_data } from '../../DataMocks/booking_data';

export const Booking = () => {
    return (
        <>
            <div>
                <h1> BOOOKING COMPONENT</h1>
            </div>
            <hr/>
            <table>
                <tr>
                    <th>Guest</th>
                    <th>Order Date</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Room Type</th>
                    <th>Status</th>
                </tr>
                {booking_data.map(booking => {
                    return (
                        <tr key={booking.Guest_id + Booking.Room_Type}>
                            <td>{booking.Guest_id}</td>
                            <td>{booking.Order_Date}</td>
                            <td>{booking.Check_In}</td>
                            <td>{booking.Check_Out}</td>
                            <td>{booking.Room_Type}</td>
                            <td>{`${booking.Status}`}</td>
                        </tr>
                    ) 
                })}
            </table>
        </>
    )
}
