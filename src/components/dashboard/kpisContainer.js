import React from 'react';
import { KpisItem } from './KpisItem';
import checkOut from '../../assets/images/check-out.svg';
import checkIn from '../../assets/images/check-in.svg';
import nowBooking from '../../assets/images/room.svg';
import scheduledRooms from '../../assets/images/appoinment.svg';
import calendar from '../../assets/images/calendar.svg';
import '../../assets/css/dashboardKpis.css';

export const KpisContainer = () => {

    /**
     * Deberemos de implementar toda la logica para 
     * obtener la ifo que necesitan los kpis.
     */
    const dataInfo = [
        {
            icon:nowBooking,
            number:2320,
            type: 'Now Bookings'
        },
        {
            icon:calendar,
            number:963,
            type: 'Sheduled Rooms'
        },
        {
            icon:checkIn,
            number:753,
            type: 'check In'
        },
        {
            icon:checkOut,
            number:512,
            type: 'Check Out'
        },
    ]
    console.log('DATA', dataInfo[0].icon)
    
    return (
            <div className="kpiContainer">
            {
                dataInfo.map(item => {
                    return (<KpisItem icon={item.icon} dataInfo={item.number} dataType={item.type}/>);
                })
            }
            </div>
    )
}
