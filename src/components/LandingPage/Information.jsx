import Logo from "../../assets/Logo"
import wave from "../../assets/image/waveAtasDua.png"
import { information } from "../../assets/data/information"

const Information = () => {
  return (
    <section id="information" className="bg-secondary-300 mt-5 md:mt-12 xl:mt-20 relative mb-20 md:mb-32 lg:mb-40 xl:mb-64">
      <img src={wave} alt="image" className="w-screen absolute -translate-y-3/4" />
      <div className="relative flex flex-col items-center rounded-lg">
        <div className="border bg-primary-500 px-5 py-2 rounded-lg lg:mt-40 mt-20">
          <Logo />
        </div>
        <div className="md:flex md:gap-8 lg:gap-10 xl:gap-24">
          {information.map((d, index) => (
            <div key={index} className="items-center flex flex-col text-center text-primary-500 gap-4">
              <img
                src={d.icon}
                alt="icon"
                className="mt-12 md:mt-16 lg:mt-20 xl:mt-24 w-10 md:w-12 lg:w-14 xl:w-16" />
              <h1 className="text-xs font-bold md:text-base xl:text-2xl lg:text-xl">{d.title}</h1>
              <p className="text-xs font-normal w-52 md:text-base xl:text-2xl lg:text-xl lg:w-72 ">{d.content}</p>
              <p className="text-xs font-normal md:text-sm lg:text-base">{d.subContent}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Information