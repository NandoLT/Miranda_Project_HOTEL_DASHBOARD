import React from 'react';
import { users_data } from '../../DataMocks/users_data';
import { UsersDataTable } from './UsersDataTable';

export const Users = () => {
    

    return (
        <>
            <div>
                <h1> USERS COMPONENT</h1>
            </div>
            <UsersDataTable userData={users_data}/>
        </>
    )
}
