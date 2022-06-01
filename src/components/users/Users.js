import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersListData, inactiveEmployees,activeEmployees } from '../../features/users/usersSlice';
import { DataTable } from  '../commons/DataTable';

export const Users = () => {

    let users = useSelector(usersListData);
    const dispatch = useDispatch();

    const usersToTable = users.map(user => {
        const userInfo = {
            Name: user.name_surname,
            Job_Desk: user.description,
            Start_Date: user.start_date,
            Contact: user.contact,
            Status: user.status
        }
        return userInfo;
    })

    useEffect( () => {
        dispatch(fetchUsers());
    },[dispatch]);

    const allEmployees = () => {
        dispatch(fetchUsers());
    }
    const onlyActive = () => {
        dispatch(activeEmployees());
    }
    const onlyInactive = () => {
        dispatch(inactiveEmployees());
    }

    return (
        <>
            <div>
                <h1> USERS COMPONENT</h1>
            </div>
            <div className="btns-collection">
                <div classNames="btns-filter">
                    <button className="button-filter" onClick={ allEmployees }>All Employees</button>
                    <button className="button-filter" onClick={ onlyActive }>Show Actives</button>
                    <button className="button-filter" onClick={ onlyInactive }>Show Inactives</button>
                </div>
                <div classNames="btns-actions">
                    <button className="button-add-item" onClick={()=> ''}>+ New Employee</button>
                    <select className="select-order-filter">
                        <option value='1'>Newest</option>
                        <option value='2'>Older</option>
                    </select>
                </div>
            </div>
            <DataTable tableInfo={usersToTable}/>
        </>
    )
}
