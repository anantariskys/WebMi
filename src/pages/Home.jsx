
import Contact from "../components/LandingPage/Contact"
import Headline from "../components/LandingPage/HeadLine"
import Information from "../components/LandingPage/Information"
import OurClient from "../components/LandingPage/OurClient"
import Paket from "../components/LandingPage/Paket"

const Home = () => {
  return (
    <div>
      <Headline />
      <Information />
      <OurClient/>
      <Paket/>
      <Contact/>
    </div>
  )
}

export default Home