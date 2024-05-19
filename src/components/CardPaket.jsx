import React from "react";
import { motion } from "framer-motion";
import check from "../assets/icon/check.svg";

const CardPaket = ({ nama, price, discount, benefit1, benefit2, benefit3, benefit4, index }) => {
  return (
    <div className={`${index%2==0?"lg:z-10 bg-secondary-900":"lg:-translate-y-20 lg:z-20 bg-primary-500"} w-full flex-col flex  aspect-[8/12] justify-between p-4 md:p-8 text-secondary-500  relative rounded-xl `}>
      <main className="flex flex-col items-center gap-2">
        <h2 className="font-semibold md:text-xl text-base">{nama}</h2>
        <h2 className="line-through md:text-xl text-base">{price}</h2>
        <h1 className="font-bold md:text-2xl text-lg">{discount}</h1>
        <div className="flex flex-col gap-3 w-full text-base">
          <div className="flex justify-start gap-3 items-center ">
            <img src={check} className="md:w-auto w-[10%]"  alt="icon" draggable="false"/>
            <p className="md:text-base text-sm">{benefit1}</p>
          </div>
          <div className="flex justify-start gap-3 items-center ">
            <img src={check} className="md:w-auto w-[10%]"  alt="icon" draggable="false"/>
            <p className="md:text-base text-sm">{benefit2}</p>
          </div>
          <div className="flex justify-start gap-3 items-center ">
            <img src={check} className="md:w-auto w-[10%]"  alt="icon" draggable="false"/>
            <p className="md:text-base text-sm">{benefit3}</p>
          </div>
          <div className="flex justify-start gap-3 items-center ">
            <img src={check} className="md:w-auto w-[10%]"  alt="icon" draggable="false"/>
            <p className="md:text-base text-sm">{benefit4}</p>
          </div>
        </div>
      </main>
      
      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        className="bg-secondary-50 text-primary-500 text-sm md:text-2xl font-semibold w-full py-1  rounded-2xl"
      >
        Pesan
      </motion.button>
    </div>
  );
};

export default CardPaket;
