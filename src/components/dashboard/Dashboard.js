import React from 'react';
import { BarChart } from '../d3Data/BarChart';
import { BarChartBeta } from '../d3Data/BarChartBeta';

export const Dashboard = () => {
    
    const state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
    }
    

    return (
        <>
            <h1> DASHBOARD COMPONENT</h1>
            <BarChart data = {state.data} width={state.width} height={state.height} />
            <BarChartBeta />
        </>
    )
}
