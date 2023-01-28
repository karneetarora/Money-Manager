import React from 'react'
import '../pages_css/SideNav.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


function SideNav() {
  return (
    <div className='side-nav-cntr'>
        <h2 className='temp-logo'>Money Manager</h2>
        <ul className='side-nav-item-cntr'>
            <MaterialIcon icon="dashboard"  />
            <a className='side-nav-label'>Dashboard</a>
        </ul>
        <ul className='side-nav-item-cntr'>
            <MaterialIcon icon="receipt" />
            <a className='side-nav-label'>Transaction</a>
        </ul>
        <ul className='side-nav-item-cntr'>
            <MaterialIcon icon="insights" />
            <a className='side-nav-label'>Overview</a>
        </ul>
        <ul className='side-nav-item-cntr'>
            <MaterialIcon icon="settings" />
            <a className='side-nav-label'>Settings</a>
        </ul>
    </div>
  )
}

export default SideNav