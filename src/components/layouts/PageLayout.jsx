import Footer from "../Footer"
import Navbar from "../Navbar"

const PageLayout = ({children}) => {
  return (
    <div className=" bg-secondary-300  mx-auto font-Poppins">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout