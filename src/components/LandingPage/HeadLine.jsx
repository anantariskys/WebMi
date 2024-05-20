import arrow from "../../assets/icon/rightArrow.svg"
import headlineImage from "../../assets/image/laptop.svg"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Headline = () => {

    const target = useRef(null)
    const {scrollYProgress} = useScroll({
        target:target,
        offset:["start start","end start"]
    })
    const xRight = useTransform(scrollYProgress,[0,1],[0,200])
    const xLeft = useTransform(scrollYProgress,[0,1],[0,-200])
    const xLeft2 = useTransform(scrollYProgress,[0,1],[0,-100])
    const opacity = useTransform(scrollYProgress,[0,1],[1,0])


    return (
        <section ref={target} id="headline" className="bg-primary-500">
            
                <div className="flex flex-col overflow-hidden container h-screen mx-auto justify-center items-center px-4  md:px-8 lg:px-12 lg:py-6 xl:px-20 text-secondary-300 md:flex-row md:justify-between md:items-center">
                    <motion.img 
                    initial={{
                        x:window.innerWidth/2
                    }}
                    animate={{
                        x:0,
                       rotate:["0deg","3deg","0deg"]
                    }}
                    transition={{
                        repeatType: "reverse", 
                        repeatDelay: 0.5, 
                        type: "tween",
                        x: { 
                            duration: 0.5,
                         },
                        rotate: { repeat: Infinity,duration:2}, 
                      }}
                      draggable="false"
                      whileHover={{
                        scale:1.03
                    }}
                    whileTap={{
                          scale:1.01

                      }}
                      style={{
                        x:xRight
                      }}
                    src={headlineImage} alt="image" className="w-64  md:order-2 md:w-80 lg:w-2/5" />
                    <div className="flex flex-col items-center text-center gap-4 xl:gap-7 md:order-1 md:items-start md:text-start">
                        <motion.h1 
                        initial={{
                            x:-window.innerWidth/2
                        }}
                        animate={{
                            x:0,
                        }}
                        style={{
                            x:xLeft
                        }}
                        transition={{
                       
                            duration:0.5
                        }}
                        
                        className="text-2xl font-bold md:text-3xl lg:text-5xl xl:text-6xl sm:text-4xl">Mulai Bisnismu<br />Bersama Kami</motion.h1>
                        <motion.p 
                          initial={{
                            x:-window.innerWidth
                        }}
                        animate={{
                            x:0,
                        }}
                        style={{
                            x:xLeft2
                        }}
                        transition={{
                            delay:0.5,
                            duration:0.3
                        }}
                        className="text-xs font-normal w-60 sm:text-base sm:w-96 lg:w-auto lg:text-xl">WebMi membantu pembuatan website untuk bisnis Anda agar bisa dikelola darimana saja.</motion.p>
                        
                            <motion.button
                                whileTap={{
                                    scale: 0.95,
                                }}
                                style={{
                                    opacity
                                }}
                                className="bg-secondary-50 flex text-primary-500 font-semibold text-xs md:text-xl sm:text-lg lg:text-xl items-center rounded-xl py-2 px-3 mt-3 md:rounded-2xl lg:rounded-3xl lg:py-3 lg:px-5">
                                Informasi Lebih Lanjut
                                <img src={arrow} alt="icon" className="w-3 ml-2 sm:w-5" />
                            </motion.button>
                        
                    </div>
                </div>
                <div className="h-[10vh]"></div>
          
        </section>
    )
}



export default Headline;