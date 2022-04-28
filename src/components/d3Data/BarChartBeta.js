import React, {useEffect} from 'react';
import * as d3 from 'd3';
import { style } from 'd3';

export const BarChartBeta = () => {

    const data = [
        {
          "week_day":"M",
          "sales":1900,
          "occupancy":19
        },
        {
          "week_day":"T",
          "sales":6700,
          "occupancy":67
        },
        {
          "week_day":"W",
          "sales":1000,
          "occupancy":10
        },
        {
          "week_day":"TH",
          "sales":2300,
          "occupancy":23
        },
        {
          "week_day":"F",
          "sales":7800,
          "occupancy":78
        },
        {
          "week_day":"S",
          "sales":9000,
          "occupancy":90
        },
        {
          "week_day":"SU",
          "sales":2500,
          "occupancy":25
        },
      ];

    useEffect(() => {
      drawChart();
    },[]);

    const drawChart = () => {
      
        var container = d3.select('#d3Id'),
        width = 700,
        height = 400,
        margin = {top: 30, right: 20, bottom: 30, left: 50},
        barPadding = .3,
        axisTicks = {qty: 10, outerSize: 0};

        var svg = container
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        // svg.append('text')
        //     .attr('x', (height / 2) - margin.top)
        //     .attr('y', height / 2)
        //     .attr('transform', 'rotate(-90)')
        //     .attr('text-anchor', 'middle')
        //     .text('Sales $')

        // svg.append('text')
        //     .attr('x', (height / 2) - margin.right)
        //     .attr('y', height / 2.4)
        //     .attr('transform', 'rotate(-90)')
        //     .attr('text-anchor', 'middle')
        //     .text('% occupancy')
        
        svg.append('text')
            .attr('x', ((width / 2) - margin.left ))
            .attr('y', 0)
            .attr('text-anchor', 'middle')
            .text('Data About sales and % occupancy')
            .style('font-weight', 'bold')

        var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
        var xScale1 = d3.scaleBand();
        var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);
        var yScale2 = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

        var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
        var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);
        var yAxis2 = d3.axisRight(yScale2).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

        xScale0.domain(data.map(d => d.week_day));
        xScale1.domain(['sales', 'occupancy']).range([0, xScale0.bandwidth()]);
        var maxValue = Math.max.apply(null,
          data.map( o =>  o.sales));
        // var maxValue2 = Math.max.apply(null,
        //   data.map( o =>  o.occupancy));

        yScale.domain([0, maxValue]);
        yScale2.domain([0, 100]);
        // yScale.domain([0, 4000]);

        var week_day = svg.selectAll(".week_day")
            .data(data)
            .enter().append("g")
            .attr("class", "week_day")
            .attr("transform", d => `translate(${xScale0(d.week_day)},0)`);
        
        /* Add sales bars */
        week_day.selectAll(".bar.sales")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar sales")
            .style("fill","blue")
            .attr("x", d => xScale1('sales'))
            .attr("y", d => yScale(d.sales))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.sales)
            });

        /* Add occupancy bars */
        week_day.selectAll(".bar.occupancy")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar occupancy")
            .style("fill","red")
            .attr("x", d => xScale1('occupancy'))
            .attr("y", d => yScale2(d.occupancy))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
            return height - margin.top - margin.bottom - yScale2(d.occupancy)
            });
        // Add legend
        // var legendElement =svg
        //   .append("g")
        //   .attr("class", "legend__container")
        //   .attr("transform", `translate(${width}, ${margin.top})`)
        //   .selectAll("g.legend__element")
        //   .data(data)
        //   .enter()
        //   .append("g")
        //   .attr("transform", function(d, i) {
        //     return `translate(${10}, ${i * 30})`;
        //   });

        //   legendElement
        //     .append("text")
        //     .attr("x", 30)
        //     .attr("font-size", "14px")
        //     .text('SALES in $');
        //   legendElement
        //     .append("text")
        //     .attr("x", 30)
        //     .attr("font-size", "14px")
        //     .text('OCCUPANCY in %');
        //   legendElement
        //     .append("rect")
        //     .attr("x", 0)
        //     .attr("y", -15)
        //     .attr("width", 20)
        //     .attr("height", 20)
        //     .attr("fill", 'grey');

        // Add the X Axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(xAxis);
        // Add the Y Axis
        svg.append("g")
            .attr("class", "y axis left")
            .style("stroke", "steelblue")
            .call(yAxis);
        svg.append("g")
            .attr("class", "y axis right")
            .attr("transform", `translate(${width - margin.right - margin.left}, 0)`) 
            .style("stroke", "red")
            .call(yAxis2);
    }

    return( 
        <div id="d3Id"></div>
    )

}