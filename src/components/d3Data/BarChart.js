import React, {useEffect} from 'react';
import * as d3 from 'd3';


export const BarChart = ({data, width, height}) => {

    useEffect(() => {
        drawChart();
    },[]);

    const data2 = [200, 100, 400, 45, 34]

    const drawChart = () => {

        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => height - (10 * d) - 3)
    }

    return( 
        <div id="chart"></div>
    )
}