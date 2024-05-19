import arrow from "../../assets/icon/rightArrow.svg"
import headlineImage from "../../assets/image/laptop.svg"
import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Headline = () => {
    return (
        <section id="headline" className="bg-primary-500 -mt-1">
            <Parallax speed={10}>
                <div className="flex flex-col container items-center px-4 pt-4 pb-24 md:pt-6 md:px-8 lg:px-12 lg:pt-10 xl:px-20 text-secondary-300 md:flex-row md:justify-between md:items-start">
                    <img src={headlineImage} alt="image" className="w-64 mb-4 md:order-2 md:w-80 xl:w-auto lg:w-96" />
                    <div className="flex flex-col items-center text-center gap-4 xl:gap-7 md:order-1 md:items-start md:text-start">
                        <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl xl:text-7xl sm:text-3xl">Mulai Bisnismu<br />Bersama Kami</h1>
                        <p className="text-xs font-normal w-60 sm:text-base sm:w-96 lg:w-auto lg:text-xl xl:text-2xl">WebMi membantu pembuatan website untuk bisnis Anda agar bisa dikelola darimana saja.</p>
                        <div>
                            <motion.button
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="bg-secondary-50 flex text-primary-500 font-semibold text-xs md:text-xl sm:text-lg xl:text-2xl items-center rounded-xl py-2 px-3 mt-3 md:rounded-2xl lg:rounded-3xl lg:py-3 lg:px-5">
                                Informasi Lebih Lanjut
                                <img src={arrow} alt="icon" className="w-3 ml-2 sm:w-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

const App = () => {
    return (
        <ParallaxProvider>
            <Headline />
        </ParallaxProvider>
    );
}

export default App;