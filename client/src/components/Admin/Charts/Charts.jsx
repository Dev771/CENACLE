import React from 'react'
import { Chart } from 'react-chartjs-2'

const Charts = ({ chartData }) => {
  return (
    <Chart type='pie' data={chartData} />
  )
}

export default Charts