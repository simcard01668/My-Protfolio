
import React from 'react'
import './Test.scss'
import { delay, motion, stagger } from 'framer-motion'

const Test = () => {
  const listItem = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"]

  const variants = {
    visible : (i)=>({ opacity: 1,
      transition: {
        delay: i * 0.3
      },
      x:100
     }),
     hidden : {
      opacity: 0,
      x:0
     }

  }
  return (
    <div className="course">
      <motion.ul variants={variants} animate='visible' initial="hidden" >
        {listItem.map((item, i)=>{
          console.log(i)
          return <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
        })}
      </motion.ul>
    </div>
  )
}

export default Test