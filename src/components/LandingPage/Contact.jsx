import React from "react";
import bubble from "../../assets/image/bubble.png";
import send from "../../assets/icon/send.svg";
import { motion } from "framer-motion";
import TitleSection from "../TitleSection";

const Contact = () => {
  return (
    <div id="contact" className="bg-secondary-300 w-full pt-20 pb-28 md:pt-24 lg:pt-28 xl:pt-40">
   
      <TitleSection className="mb-5 lg:mb-10">Cus, Pesan Sekarang!</TitleSection>
      <main className="container mx-auto md:px-24 px-4 relative z-20 ">
        <div className="bg-secondary-900 p-4 md:p-10 rounded-xl">
          <div className="w-full bg-secondary-300 p-4 md:p-10 rounded-xl">
            <img src={bubble} className="md:w-2/5 w-3/4 mb-32" alt="img-bubble" draggable="false" />
            <hr className="border-secondary-900" />
            <div className="flex justify-between items-center">
              <input type="text" name="" id="" placeholder="Halo, kak! Mau pesan...." className="text-sm md:text-2xl bg-transparent ring-0 focus:outline-none w-full px-2 md:px-5 mt-2" />
              <motion.img
                whileTap={{
                  scale: 0.95,
                }}
                src={send}
                draggable="false"
                alt="send-icon"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              className="bg-primary-500 text-secondary-50 w-3/5 text-xs md:text-xl lg:text-2xl font-semibold  py-1  lg:py-3 rounded-2xl mx-auto mt-4 md:mt-10"
            >
              Chat
            </motion.button>
          </div>

        </div>
      </main>
    </div>
  );
};



export default Contact;