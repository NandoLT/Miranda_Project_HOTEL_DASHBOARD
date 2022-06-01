import React from 'react';
import verticalPoint from '../../assets/images/vertical_point.svg';
import '../../assets/css/DataTable.css';

export  const DataTable = ({tableInfo}) => {
    const dataKeys =  tableInfo.length > 0 ?  Object.keys(tableInfo[0]) : null;

    return (
        <>
            {tableInfo.length > 0 ?
                <table className="data-table">
                    <thead>
                        <tr>
                            <th> <input type="checkbox"/></th>
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
                                        {values.map ((value,index) => {
                                            return (
                                                <>
                                                    {index === 0 ? <td> <input type="checkbox"/></td> : null}
                                                    <td>{value}</td>
                                                    {index === values.length - 1 ? <td><img src={verticalPoint} alt="vertical-point"/></td> : null}
                                                </>
                                            )
                                        })}
                                    </tr>)
                                })
                            }
                    </tbody>
                </table>
                : 
                <h3>No results in DB</h3>
            }
        </>
    )
}
