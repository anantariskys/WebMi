import { Splide, SplideSlide } from "@splidejs/react-splide";
import Wave from "../../assets/image/waveBawah.png";
import CardPaket from "../CardPaket";
import { paket } from "../../assets/data/paket";
import '../../style/paket.css'
import TitleSection from "../TitleSection";
const Paket = () => {



  return (
    <section  className="relative w-full h-fit bg-secondary-300 flex items-center">
      <img src={Wave} className="absolute top-0 xl:top-20 -translate-y-1/4 z-10" draggable="false" alt="img-wave" />
      <div  className="container mx-auto mt-32 md:mt-56 lg:mt-96 lg:px-20 xl:px-0 relative z-20">
      

          <TitleSection  className={"mb-8 lg:mt-20"}>Beli Paket Lebih Murah!</TitleSection>
       
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

          className="xl:w-4/6 mx-auto h-fit" id="paket">
          {
            paket.map((item, index) => (
              <SplideSlide className="md:pt-32 pt-12 pb-10 px-10 md:px-32 lg:px-0 duration-200 ease-in-out transition-transform" key={index}>
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



export default Paket;