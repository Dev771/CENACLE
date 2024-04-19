import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Charts from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import * as d3 from 'd3';

import { Chart } from 'react-chartjs-2';

import "./style.css";
import { getTags } from '../../../actions/Tag';

Charts.register(CategoryScale);

const AdminHome = () => {
  
  const tags = useSelector((state) => state.tags);
  const svgRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 400)
      .attr('height', 400)
      .attr("margin-top", 400)
      .attr("overflow", 'visible')

    const formattedData = d3.pie().value((d) => d.Number_Of_Posts)(tags);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(200);
    const color = d3.scaleOrdinal().range(d3.schemeSet3);

    svg.selectAll()
      .data(formattedData)
      .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => color(Math.random()))
        .attr("transform", "translate(200, 200)") 
        .attr("opacity", .7)

    svg.selectAll()
      .data(formattedData)
      .join("text")
        .text(d => {
          return d.data.Number_Of_Posts > 0 ? d.data.tagtype : ""
        })
        .attr("transform", d => `translate(${arcGenerator.centroid(d).map((a) => a + 200)})`)
        .attr("text-anchor", 'middle')
  }, [tags])

  return (
    <div className='AdminHome'>
      <svg ref={svgRef} ></svg>
    </div>
  )
}

export default AdminHome;