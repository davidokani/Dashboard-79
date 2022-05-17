// import React from 'react'
// import './chart.scss'

// const Chart = () => {
//   return <div className='chart'>Chart</div>
// }

// export default Chart


import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./chart.css"

export default function Chart() {


  const data = [
    {
      name: 'Jan',
      "Acitive User": 2898,
    },
    {
      name: 'Feb',
      "Acitive User": 2990,
    },
    {
      name: 'Mar',
      "Active User": 4830,
    },
    {
      name: 'April',
      "Active User": 5020,
    },
    {
      name: 'May',
      "Active User": 3200,
    },
    {
      name: 'June',
      "Active User": 5100,
    },
    {
      name: 'July',
      "Active User": 3639,
    },
    {
      name: 'Aug',
      "Active User": 5979,
    },
    {
      name: 'Sept',
      "Active User": 6001,
    },
    {
      name: 'Oct',
      "Active User": 7800,
    },
    {
      name: 'Nov',
      "Active User": 7549,
    },
    {
      name: 'Dec',
      "Active User": 8038,
    },
  ];

  return (
    <div className='chart'>
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width={"100%"} aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={"name"} stroke={"#5550bd"} />
          <Line type={"monotone"} dataKey={"Active User"} stroke={"#5550bd"} />
          <Tooltip />
          <CartesianGrid stroke={"#e0dfdf"} strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
