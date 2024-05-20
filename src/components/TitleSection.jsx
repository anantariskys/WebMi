import { motion, useScroll, useTransform } from 'framer-motion'
import  { useRef } from 'react'

const TitleSection = ({children,className}) => {
    const target = useRef(null)
    const {scrollYProgress} = useScroll({
        target:target,
        offset:["start end","start center"]
    })
    const opacity = useTransform(scrollYProgress,[0,1],[0,1])
    const y = useTransform(scrollYProgress,[0,1],[200,0])
  
  return (
    <motion.h2 
    style={
        {opacity,y}
    }
    ref={target} className={`${className} text-primary-500 font-bold text-base md:text-3xl xl:text-5xl lg:text-4xl w-fit mx-auto  `}>{children}</motion.h2>

  )
}

export default TitleSection