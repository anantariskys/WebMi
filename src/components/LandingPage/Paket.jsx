import { Splide, SplideSlide } from "@splidejs/react-splide";
import Wave from "../../assets/image/waveBawah.png";
import CardPaket from "../CardPaket";



const paket = [
  {
    nama : "Paket Gold",
    price : "Rp 2.500.000,00",
    discount : "Rp 2.100.000,00",
    benefit :[
      '8 Halaman',
      'Domain dan Hosting',
      '1 Tahun perpanjangan website',
      '7 Hari pengerjaan'
    ]
  },
  {
    nama : "Paket Platinum",
    price : "Rp 3.000.000,00",
    discount : "Rp 2.700.000,00",
    benefit :[
      '12 Halaman',
      'Domain dan Hosting',
      '2 Tahun perpanjangan website',
      '10 Hari pengerjaan'
    ]
  },
  {
    nama : "Paket Silver",
    price : "Rp 1.250.000,00",
    discount : "Rp 900.000,00",
    benefit :[
      '5 Halaman',
      'Domain dan Hosting',
      '1 Tahun perpanjangan website',
      '5 Hari pengerjaan'
    ]
  },
]

const Paket = () => {
  return (
    <section className="relative w-full h-fit bg-secondary-300 flex items-center">
      <img src={Wave} className="absolute top-0 -translate-y-1/4 z-10 " draggable="false" alt="img-wave" />
      <div className="container mx-auto mt-32 md:mt-56 lg:mt-96 lg:px-20 xl:px-0  relative z-20">
        <h2 className="text-primary-500 font-bold text-2xl md:text-5xl w-fit mx-auto lg:mb-10 ">Beli Paket Lebih Murah!</h2>
        <Splide
          options={{
            arrows: false,
            breakpoints:{
              4000:{
                perPage: 3,
                drag: false,
                gap: -24,
                
              },
              768:{
                perPage: 1,
                pagination:true,
                drag: true,
                gap: -320,
                
              },
              425:{
                perPage: 1,
                pagination:true,
                drag: true,
                gap: -120,

              }

            }
          }}
          
          className="xl:w-4/6 mx-auto h-fit"
        >
          {
            paket.map((item,index)=>(
              <SplideSlide className="md:pt-32 pt-12 pb-10 px-10 md:px-32 lg:px-0 duration-300 transition-transform"  key={index}>
              <CardPaket nama={item.nama} price={item.price} index={index} discount={item.discount} benefit={item.benefit} />
          </SplideSlide>

            ))
          }
         
      
        </Splide>
      </div>
    </section>
  );
};

export default Paket;
