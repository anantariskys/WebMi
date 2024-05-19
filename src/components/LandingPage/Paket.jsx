import { Splide, SplideSlide } from "@splidejs/react-splide";
import Wave from "../../assets/image/waveBawah.png";
import CardPaket from "../CardPaket";
import { paket } from "../../assets/data/paket";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Paket = () => {

  return (
    <section id="paket" className="relative w-full h-fit bg-secondary-300 flex items-center">
      <img src={Wave} className="absolute top-0 -translate-y-1/4 z-10" draggable="false" alt="img-wave" />
      <div className="container mx-auto mt-32 md:mt-56 lg:mt-96 lg:px-20 xl:px-0 relative z-20">
        <Parallax speed={5}>
          <h2 className="text-primary-500 font-bold text-base md:text-3xl xl:text-5xl lg:text-4xl w-fit mx-auto mb-8 lg:mt-20">Beli Paket Lebih Murah!</h2>
        </Parallax>
        <Splide
          options={{
            arrows: false,
            breakpoints: {
              4000: {
                perPage: 3,
                drag: false,
                gap: -24,

              },
              768: {
                perPage: 1,
                pagination: true,
                drag: true,
                gap: -320,

              },
              425: {
                perPage: 1,
                pagination: true,
                drag: true,
                gap: -120,

              }

            }
          }}

          className="xl:w-4/6 mx-auto h-fit">
          {
            paket.map((item, index) => (
              <SplideSlide className="md:pt-32 pt-12 pb-10 px-10 md:px-32 lg:px-0 duration-300 transition-transform" key={index}>
                <CardPaket nama={item.nama} price={item.price} index={index} discount={item.discount} benefit1={item.benefit1}
                  benefit2={item.benefit2} benefit3={item.benefit3} benefit4={item.benefit4} />
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <ParallaxProvider>
      <Paket />
    </ParallaxProvider>
  );
}

export default App;