import './Sidebar.scss'
import ToggleButton from './togglebutton/ToggleButton'
import Links from './links/Links'
import { motion, stagger } from 'framer-motion'
import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const variants = {
    open:{
      clipPath: "circle(1400px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:300,
        staggerChildren: 0.35
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:200,
        damping: 40,
      }
    }
  }

  const linkVariants = {
    open: {
      opacity: 1,
      x: 0
    },
    closed: {
      opacity: 0,
      x: -200
    }
  }
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links animationProp={linkVariants}/>
      </motion.div>
      <ToggleButton open={setOpen} />
    </motion.div>
  )
}

export default Sidebar