import { motion } from "framer-motion";
import React from "react";
import WaveAtas from "../../assets/image/waveAtas.png";
const OurClient = () => {
  const data1 = [
    {
      img: "https://source.unsplash.com/random/900×700/?fruit",
      title: "CMS.com",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?design",
      title: "Design with me",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?yoga",
      title: "YOGA",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?fruit",
      title: "CMS.com",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?design",
      title: "Design with me",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?yoga",
      title: "YOGA",
    },
   
  ];
  const data2 = [
 
    {
      img: "https://source.unsplash.com/random/900×700/?candle",
      title: "candlex",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?invest",
      title: "investmentz",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?crypto",
      title: "crypto fund",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?candle",
      title: "candlex",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?invest",
      title: "investmentz",
    },
    {
      img: "https://source.unsplash.com/random/900×700/?crypto",
      title: "crypto fund",
    },
  ];
  return (
    <section className="bg-secondary-300 ">
      <h2 className="text-primary-500 font-bold text-2xl md:text-5xl w-fit mx-auto mb-24">Klien Kami</h2>
      <div className=" bg-primary-500 relative ">
        <img src={WaveAtas} alt="wave" className="w-screen absolute z-10 top-0 -translate-y-1/2" />

        <div className="overflow-hidden flex flex-col gap-10 w-full md:py-32 py-16 pb-10">
        <motion.div 
        animate={{
            x:[0,"-50%",],
        }}
        transition={{
            repeat:Infinity,
            duration:10,
            ease:"linear"
        }}
        
    

        className={`flex md:w-[200vw] w-[600vw]   relative z-30    `}>
          {data1.map((i, index) => (
          <div className="aspect-[16/10] w-full ">
              <div key={index} className=" w-4/5 h-fit aspect-[16/10] bg-secondary-700 group shadow-2xl rounded-b-xl">
            <div className="overflow-hidden w-full aspect-[16/10]  ">
              <img src={i.img} draggable="false" className=" object-cover  duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1 " alt="img" />

            </div>
              <h3 className="text-sm font-semibold text-center py-2 lg:py-5 text-secondary-300">{i.title}</h3>
            </div>
          </div>
          ))}
        </motion.div>
        <motion.div 
        animate={{
            x:["-50%",0],
        }}
        transition={{
            repeat:Infinity,
            duration:10,
            ease:"linear"
        }}
    

        className={`flex md:w-[200vw] w-[600vw]   relative z-30    `}>
          {data2.map((i, index) => (
          <div className="aspect-[16/10] w-full ">
              <div key={index} className=" w-4/5 h-fit aspect-[16/10] bg-secondary-700 group shadow-xl rounded-b-xl">
            <div className="overflow-hidden w-full aspect-[16/10]  ">
              <img src={i.img} draggable="false" className=" object-cover  duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1 " alt="img" />

            </div>
              <h3 className="text-sm font-semibold text-center py-2 lg:py-5 text-secondary-300">{i.title}</h3>
            </div>
          </div>
          ))}
        </motion.div>
           
        </div>
      </div>
    </section>
  );
};

export default OurClient;
