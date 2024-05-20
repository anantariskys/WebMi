import WaveAtas from "../../assets/image/waveAtas.png";
import { data1 } from "../../assets/data/data1";
import { data2 } from "../../assets/data/data2";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TitleSection from "../TitleSection";

const OurClient = () => {
  return (
    <section  id="client" className="bg-secondary-300 ">
      <TitleSection className="mb-24">Klien Kami</TitleSection>
      <div className=" bg-primary-500 relative  ">
        <img src={WaveAtas} alt="wave" className="w-screen absolute z-10 -top-10 md:top-0 -translate-y-1/2" />
        <div className="flex flex-col  w-full justify-center gap-4 lg:gap-16  md:pt-24">
          <Splide
            options={{
              pagination: false,
              arrows:false,
              breakpoints: {
                728: {
                  perPage: 1,
                  gap:8,
                },
                4000: {
                  gap:24,
                  perPage: 3,
                },
              },
              perMove:1,
              autoplay:true,
              rewind:true,
              interval:2000
              

            }}
            className="relative z-40"
          >
            {data1.map((i, index) => (
              <SplideSlide key={index} className="px-10 md:px-4 sm:px-8  flex items-center h-fit">
                <div className="w-full h-full   bg-secondary-700 group shadow-2xl rounded-xl">
                  <div className="overflow-hidden w-full aspect-video  ">
                    <img src={i.img} draggable="false" className="w-full object-cover duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1 " alt="img" />
                  </div>
                  <h3 className="text-sm font-semibold text-center py-2 lg:py-5 text-secondary-300 xl:text-2xl">{i.title}</h3>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <Splide
            options={{
              pagination: false,
              arrows:false,
              breakpoints: {
                728: {
                  perPage: 1,
                  gap:8,
                },
                4000: {
                  gap:24,
                  perPage: 3,
                },
              },
              perMove:1,
              autoplay:true,
              rewind:true,
              interval:2000,
              direction:"rtl"
              

            }}
            className="relative z-40 md:block hidden"
          >
            {data2.map((i, index) => (
              <SplideSlide key={index} className="px-10 md:px-4 sm:px-8  flex items-center h-fit">
                <div className="w-full h-full   bg-secondary-700 group shadow-2xl rounded-xl">
                  <div className="overflow-hidden w-full aspect-video  ">
                    <img src={i.img} draggable="false" className="w-full object-cover duration-200 ease-in-out group-hover:scale-105 group-hover:rotate-1 " alt="img" />
                  </div>
                  <h3 className="text-sm font-semibold text-center py-2 lg:py-5 text-secondary-300 xl:text-2xl">{i.title}</h3>
                </div>
              </SplideSlide>
            ))}
          </Splide>
         
        </div>
        
      </div>
    </section>
  );
};

export default OurClient;
