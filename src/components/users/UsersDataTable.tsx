import React from 'react'

export const UsersDataTable = ({userData}) => {
    return (
        <>
        {userData.length > 0 ? 
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Status</th>
                </tr>
                {userData.map(user => {
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
            : 
            <h3>No users in database</h3>
        }
        </>
    )
}
