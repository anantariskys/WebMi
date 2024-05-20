import Contact from "../components/LandingPage/Contact";
import Headline from "../components/LandingPage/HeadLine";
import Information from "../components/LandingPage/Information";
import OurClient from "../components/LandingPage/OurClient";
import Paket from "../components/LandingPage/Paket";

const Home = () => {
  return (
    <div>
      <section id="headline">
        <Headline />
      </section>
      <secction id="information">
        <Information />
      </secction>
      <secction id="ourClient">
        <OurClient />
      </secction>
   
        <Paket />
  
      <secction id="contact">
        <Contact />
      </secction>
    </div>
  );
};

export default Home;
