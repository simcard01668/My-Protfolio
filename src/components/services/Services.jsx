import React, { useRef } from 'react'
import './Services.scss'
import { motion, useInView } from 'framer-motion'
import { duration } from '@mui/material'
import { stagger } from 'framer-motion/dom'


const Services = () => {

    const items = [
        {
            title: "Final Year Projects",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Web Chat Bot",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Internship",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Admin DashBoard",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ]

    const ref = useRef()
    const isInView = useInView(ref)

    const variants = {
        initial:{
            x:-500,
            y:100,
            opacity:0
        },
        animate:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.5
            }
        }
    }
    

  return (
    <motion.div className='services' ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
        <motion.div variants={variants} className="titleContainer">
            <motion.div variants={variants} className="firstTitle">
                <img src="/people.webp" alt="" />
                <h1>Unique Ideas</h1>
            </motion.div>
            <motion.div variants={variants} className="secondTitle">
                <h1>For Your Business.</h1>
                <button>What we do?</button>
            </motion.div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <ul>
            {
                items.map((item)=>{
                    return <motion.li whileHover={{background:"white", color:"black", scale:1.1, borderRadius:"10%"}} >
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>Go</button>
                    </motion.li>
                })
            }
            </ul>
        </motion.div>


    </motion.div>
  )
}

export default Services