import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AssessmentIcon from '@mui/icons-material/Assessment'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Dashboard-79</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>

          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>

          <li>
            <AssessmentIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>

          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppTwoToneIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar
