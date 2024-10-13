import React from 'react'
import './Hero.scss'
import { motion, stagger } from 'framer-motion'
import { duration } from '@mui/material'

const textVariants = {
    initial: {
        x: 1000,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    },
    scroll: {
        y: 50,
        opacity: 0,

        transition: {
            duration: 2,
            repeat: Infinity,
        }
    },
    scrollEntry: {
        y: 0,
        opacity: 1,

    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20
        }
    },
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Isaac Yam</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Full Stack Web Developer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} >See the Latest Work</motion.button>
                        <motion.button variants={textVariants} >Contact me</motion.button>
                        <motion.button variants={textVariants} >Download resume</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} initial="scrollEntry" animate="scroll" src="scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
                Web Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero