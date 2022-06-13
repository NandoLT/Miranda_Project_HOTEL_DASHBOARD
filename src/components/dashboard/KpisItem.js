import React from 'react';
import '../../assets/css/dashboardKpis.css';


export const KpisItem = ({icon, dataInfo, dataType}) => {
    return (
        <div className="kpiItem">
            <div className="icon-kpi">
                <img src={icon} alt='icon-kpi'/>
            </div>
            <div className="info-kpi">
                <h2>{dataInfo}</h2>
                <h6>{dataType}</h6>
            </div>
        </div>
    )
}
