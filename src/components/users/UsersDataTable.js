import React from 'react'

export const UsersDataTable = ({userData}) => {
    // const [usersInfo, setUsersInfo] = useState(userData);
    // console.log('USERSINFO', usersInfo)
    return (
        <>
        {userData.length > 0 ? 
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Contact</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => {
                        return (
                            <tr key={user._id}>
                                <td><img src={user.photo} alt='user-avatar'/></td>
                                <td>{user._id}</td>
                                <td>{user.name_surname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.contact}</td>
                                <td>{user.status}</td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
            : 
            <h3>No users in database</h3>
        }
        </>
    )
}
