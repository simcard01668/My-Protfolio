import React, { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'



const Parallax = ({type}) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll(
        {target:ref,
            offset:["start start", "end start"]
        }
    )
    const bgTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textTransform = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  return (
    <div className='parallax' ref={ref} style={{background: type==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)"}}>
        <motion.h1 style={{y:textTransform}}>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
        <div className="mountains"></div>
        <motion.div style={{y:bgTransform, backgroundImage:`url(${type==="services" ? "./sun.png" : "/planets.png"})`}} className="planets"></motion.div>
        <motion.div style={{x:bgTransform}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax