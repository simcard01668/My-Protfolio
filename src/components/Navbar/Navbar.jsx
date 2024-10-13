import React, { useState } from 'react'
import './Navbar.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Facebook, GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{scale: 0}} animate={{scale:1}} transition={{duration: 1}}>Isaac Yam's Profolio Page</motion.span>
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