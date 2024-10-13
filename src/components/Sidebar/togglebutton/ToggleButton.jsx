import React from 'react'
import './ToggleButton.scss'
import { motion } from 'framer-motion'

const ToggleButton = ({open}) => {
  return (
    <button onClick={()=>open((prev)=>!prev)}>
        <svg widht="30" height="30" viewBox="0 0 24 24">
          <motion.path strokeWidth={2} stroke="black" strokeLinecap="round"  variants={{closed:{d:"M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"}}}></motion.path>
          <motion.path strokeWidth={2} stroke="black" strokeLinecap="round" d="M 2 9.346 L 20 9.346" variants={{open:{opacity :0}, closed:{opacity:1}}}></motion.path>
          <motion.path strokeWidth={2} stroke="black" strokeLinecap="round" variants={{closed:{d: "M 2 16.346 L 20 16.346"}, open: {d:"M 3 2.5 L 17 16.236"}}}></motion.path>
        </svg>
    </button>
  )
}

export default ToggleButton