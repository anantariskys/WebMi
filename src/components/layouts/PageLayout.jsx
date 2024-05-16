import Footer from "../Footer"
import Navbar from "../Navbar"

const PageLayout = ({children}) => {
  return (
    <div className=" bg-primary-500 px-4 py-4 md:py-6 md:px-8 lg:px-12 lg:py-10 xl:px-20 font-Poppins">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout