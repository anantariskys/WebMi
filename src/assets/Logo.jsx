import logo from "../assets/image/logo.svg"

const Logo = () => {
    return(
        <div className="flex gap-1">
            <img src={logo} alt="Logo" className="w-8 lg:w-auto"/>
            <h1 className="font-Poppins text-orange-50 lg:text-4xl text-xl font-bold">WebMi</h1>
        </div>
    )
}

export default Logo;