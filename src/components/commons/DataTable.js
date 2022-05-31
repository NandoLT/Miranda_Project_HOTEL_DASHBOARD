import React from 'react';

export  const DataTable = ({tableInfo}) => {
    console.log('DATA TO TABLE', tableInfo);
    const dataKeys =  tableInfo.length > 0 ?  Object.keys(tableInfo[0]) : null;

    return (
        <>
            {tableInfo.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            {
                                dataKeys.map(item => {
                                    return (<th>{item}</th>);
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                tableInfo.map(item => {
                                    const values = Object.values(item);
                                    return (<tr key={item._id}>
                                        {values.map (value => {
                                            return <td>{value}</td>
                                        })}
                                    </tr>)
                                })
                            }
                    </tbody>
                </table>
                : 
                <h3>DB empty</h3>
            }
        </>
    )
}
