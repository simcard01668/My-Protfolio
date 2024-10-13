import React, { useRef } from 'react'
import './Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Final Year Projects",
        img: "/people.webp",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 2,
        title: "Admin Projects",
        img: "/people.webp",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 3,
        title: "intern Projects",
        img: "/people.webp",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        id: 4,
        title: "First Year Projects",
        img: "/people.webp",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
]
const SinglePage = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])

    
    
    return <section >
        <div className="container">
            <img src={item.img} alt="" ref={ref}/>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button>See Demo</button>
            </motion.div>
        </div>

    </section>
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref }, { offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, ["100%", "0%"], { stiffness: 100, damping: 30 })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress" >
                <h2>Featured Works</h2>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {
                items.map(item => <SinglePage key={item.id} item={item} />)
            }
        </div>
    )
}

export default Portfolio