import { motion } from "framer-motion";
import React from "react";
import WaveAtas from "../../assets/image/waveAtas.png";
import { data1 } from "../../assets/data/data1";
import { data2 } from "../../assets/data/data2";

const OurClient = () => {
  return (
    <section className="bg-secondary-300 ">
      <h2 className="text-primary-500 font-bold text-base md:text-3xl xl:text-5xl lg:text-4xl w-fit mx-auto mb-24">Klien Kami</h2>
      <div className=" bg-primary-500 relative ">
        <img src={WaveAtas} alt="wave" className="w-screen absolute z-10 -top-10 md:top-0 -translate-y-1/2" />

        <div className="overflow-hidden flex flex-col gap-10 w-full md:py-32 py-16 pb-10">
          <motion.div
            animate={{
              x: [0, "-50%",],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
            }}


            className={`flex md:w-[200vw] w-[600vw]   relative z-30    `}>
            {data1.map((i, index) => (
              <div className="aspect-[16/10] w-full ">
                <div key={index} className="w-4/5 xl:w-fit h-fit aspect-[16/10] bg-secondary-700 group shadow-2xl rounded-b-xl">
                  <div className="overflow-hidden w-full aspect-[16/10]  ">
                    <img src={i.img}
                      draggable="false"
                      className=" object-cover duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1 "
                      alt="img" />
                  </div>
                  <h3 className="text-sm font-semibold text-center py-2 lg:py-5 text-secondary-300 xl:text-2xl">{i.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={{
              x: ["-50%", 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
            }}


            className={`flex md:w-[200vw] w-[600vw]   relative z-30    `}>
            {data2.map((i, index) => (
              <div className="aspect-[16/10] w-full ">
                <div key={index} className=" w-4/5 xl:w-fit h-fit aspect-[16/10] bg-secondary-700 group shadow-xl rounded-b-xl">
                  <div className="overflow-hidden w-full aspect-[16/10]  ">
                    <img src={i.img}
                      draggable="false"
                      className=" object-cover  duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1"
                      alt="img" />

                  </div>
                  <h3 className="text-sm font-semibold text-center py-2 lg:py-5 text-secondary-300 xl:text-2xl">{i.title}</h3>
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
