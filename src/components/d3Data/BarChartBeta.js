import React, {useEffect} from 'react';
import * as d3 from 'd3';

export const BarChartBeta = () => {

    const data = [
        {
          "model_name":"M",
          "field1":19,
          "field2":83
        },
        {
          "model_name":"T",
          "field1":67,
          "field2":93
        },
        {
          "model_name":"W",
          "field1":10,
          "field2":56
        },
        {
          "model_name":"TH",
          "field1":23,
          "field2":35
        },
        {
          "model_name":"F",
          "field1":78,
          "field2":56
        },
        {
          "model_name":"S",
          "field1":190,
          "field2":9
        },
        {
          "model_name":"SU",
          "field1":76,
          "field2":83
        },
      ];

      useEffect(() => {
        drawChart();
    },[]);

    const drawChart = () => {
        var container = d3.select('#d3Id'),
        width = 520,
        height = 220,
        margin = {top: 30, right: 20, bottom: 30, left: 50},
        barPadding = .3,
        axisTicks = {qty: 10, outerSize: 0, dateFormat: '%m-%d'};

        var svg = container
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding)
        var xScale1 = d3.scaleBand()
        var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0])

        var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
        var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

        xScale0.domain(data.map(d => d.model_name))
        xScale1.domain(['field1', 'field2']).range([0, xScale0.bandwidth()])
        yScale.domain([0, d3.max(data, d => d.field1 > d.field2 ? d.field1 : d.field2)])

        var model_name = svg.selectAll(".model_name")
            .data(data)
            .enter().append("g")
            .attr("class", "model_name")
            .attr("transform", d => `translate(${xScale0(d.model_name)},0)`);
        
        /* Add field1 bars */
        model_name.selectAll(".bar.field1")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar field1")
            .style("fill","blue")
            .attr("x", d => xScale1('field1'))
            .attr("y", d => yScale(d.field1))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.field1)
            });

        /* Add field2 bars */
        model_name.selectAll(".bar.field2")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar field2")
            .style("fill","red")
            .attr("x", d => xScale1('field2'))
            .attr("y", d => yScale(d.field2))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.field2)
            });

        // Add the X Axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(xAxis);
        // Add the Y Axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
    }

    return( 
        <div id="d3Id"></div>
    )

}