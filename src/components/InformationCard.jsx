import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const InformationCard = ({d,index}) => {
    const target = useRef(null)
    const {scrollYProgress} = useScroll({
        target:target,
        offset:["start end","start center"]
    })
 
    const x = useTransform(scrollYProgress,[0,1],[-200,0])
    const x2 = useTransform(scrollYProgress,[0,1],[200,0])
    const y = useTransform(scrollYProgress,[0,1],[100,0])
    const opacity = useTransform(scrollYProgress,[0,1],[0,1])
  return (
    <motion.div 
    style={{
      x:index===0?x:index==2?x2:0,
      y:index==1?y:0,
      opacity
    }}
    ref={target}
    className="items-center flex flex-col text-center text-primary-500 gap-4">
      <img
        src={d.icon}
        alt="icon"
        className=" w-10 md:w-12 lg:w-14 xl:w-16"
        draggable='false'
        />
      <h1 className="text-lg font-bold md:text-base xl:text-xl lg:text-lg">{d.title}</h1>
      <p className="text-xs font-normal w-52 md:text-sm xl:text-xl lg:text-lg lg:w-72 ">{d.content}</p>
      <p className="text-xs font-normal md:text-sm lg:text-sm">{d.subContent}</p>
    </motion.div>
  )
}

export default InformationCard