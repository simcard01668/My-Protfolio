import React, { useState } from 'react'
import './Navbar.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Facebook, GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'

const Navbar = () => {
    const [ show, setShow ] = useState(false)
  return (
    <div className='navbar'>
        {/* <button className='menu-toggle' onClick={()=>setShow(!show)}>Click me</button> */}
        {show && <Sidebar />}
        <div className="wrapper">
            <span>Isaac Yam</span>
            <div className="social">
                <a href=""><Facebook /></a>
                <a href=""><YouTube /></a>
                <a href=""><GitHub /></a>
                <a href=""><Instagram /></a>
                <a href=""><LinkedIn /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar