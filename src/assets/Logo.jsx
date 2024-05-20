import logo from "../assets/image/logo.svg";
import logo2 from "../assets/image/logo2.svg";

const Logo = ({ color }) => {
  return (
    <div className="flex gap-2">
      <img src={color ? logo2 : logo} draggable="false" alt="Logo" className="w-8  lg:w-10 aspect-auto " />
      <h1 className={`${color ? "text-primary-500" : "text-orange-50"} font-Poppins lg:text-4xl text-xl font-bold`}>
        WebMi
      </h1>
    </div>
  );
};

export default Logo;