import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersListData, inactiveEmployees,activeEmployees } from '../../features/users/usersSlice';
import { UsersDataTable } from './UsersDataTable';
import { DataTable } from  '../commons/DataTable';

export const Users = () => {

    let users = useSelector(usersListData);
    const dispatch = useDispatch();



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
            <button onClick={ allEmployees }>All employees</button>
            <button onClick={ onlyActive }>Show actives</button>
            <button onClick={ onlyInactive }>Show inactives</button>
            <button onClick={()=> ''}>+ New Employee</button>

            {/* <UsersDataTable userData={users}/> */}
            <DataTable tableInfo={users}/>
        </>
    )
}
