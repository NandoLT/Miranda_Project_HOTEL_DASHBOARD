import React from 'react';
import { users_data } from '../../DataMocks/users_data';

export const Users = () => {
    
    return (
        <>
            <div>
                <h1> USERS COMPONENT</h1>
            </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Status</th>
                </tr>
                {users_data.map(user => {
                    return (
                        <tr key={user.Id.$oid + user.Contact}>
                            <td>{user.Id.$oid}</td>
                            <td>{user.Name}</td>
                            <td>{user.Contact}</td>
                            <td>{`${user.Status}`}</td>
                        </tr>
                    ) 
                })}
            </table>
        </>
    )
}
