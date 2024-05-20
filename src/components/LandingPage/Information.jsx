import Logo from "../../assets/Logo"
import wave from "../../assets/image/waveAtasDua.png"
import { information } from "../../assets/data/information"
import { motion } from "framer-motion"
import InformationCard from "../InformationCard"
const Information = () => {
 
  


  return (
    <section id="information" className="bg-secondary-300 mt-5 md:mt-12 xl:mt-20 relative mb-20 md:mb-32 lg:mb-40 xl:mb-64">
      <img src={wave} alt="image" className="w-screen absolute -translate-y-[80%]" />
      <div className="relative flex flex-col items-center rounded-lg">
        <motion.div 
        animate={
          {
            scale:[1,1.02,0.99,1]
          }
        }
        transition={{
          repeat:Infinity
        }}
        
        className="border bg-primary-500 px-5 py-2 rounded-lg lg:mt-40 mt-20">
          <Logo />
        </motion.div>
       
          <div className="grid lg:grid-cols-3 grid-rows-1 overflow-hidden container mx-auto  px-4 md:py-16 py-10 lg:py-24   md:px-8 lg:px-12  xl:px-20 gap-4 md:gap-8 ">
            {information.map((d, index) => (
             <InformationCard d={d} index={index} key={index}/>
            ))}
          </div>
     
      </div>
    </section>
  )
}



export default Information;