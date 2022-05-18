import React from 'react'
import './home.scss'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
// import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import TableLarge from '../../components/tableLarge/TableLarge'
import TableSmall from '../../components/tablesmall/TableSmall'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          {/* <Widget type='order' /> */}
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          {/* <Featured /> */}
          <Chart />
          <div className="homeTables">
            <TableLarge />
            <TableSmall />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
