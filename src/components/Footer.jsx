import Logo from "../assets/Logo";
import waveFooter from "../assets/image/waveFooter.png";
import sosmed from "../assets/icon/sosmed.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-300 mt-56 pb-20">
      <img src={waveFooter} alt="image" className="w-screen -translate-y-1/2 " />
      <div className="px-24 xl:px-40 lg:px-32 flex flex-col items-center text-center text-secondary-300 md:-mt-40 md:relative xl:-mt-60">
        <div className="border bg-primary-500 rounded-lg border-primary-500 py-2 md:self-end px-4">
          <Logo />
        </div>
        <ul className="flex flex-col items-center md:flex-row md:justify-between mt-8 w-full">
          <li>
            <img src={sosmed} alt="icon" className="w-40 hidden md:block lg:w-full" />
          </li>
          <li className="text-xs md:text-base lg:text-lg xl:text-2xl font-semibold mt-4 md:mt-0">
            Rintis bisnis digitalmu bersama WebMi
          </li>
        </ul>

        <div className="gap-9 flex flex-col items-center mt-9 md:flex-row md:items-start md:justify-between w-full">
          <ul className="text-xs lg:text-lg gap-2 flex flex-col md:items-start md:text-start">
            <li className="font-bold">PT. WEBMI INDONESIA</li>
            <li className="w-56">Jl. Ciledug Indah no 18, Tangerang, Jawa Barat, kode pos 11890</li>
          </ul>

          <img src={sosmed} alt="icon" className="w-40 md:hidden" />

          <ul className="text-xs lg:text-lg gap-2 flex flex-col md:items-start md:text-start">
            <li className="font-bold">Tentang WebMi</li>
            <li>Kontak kami</li>
            <li>Paket</li>
            <li>Klien kami</li>
          </ul>

          <ul className="text-xs lg:text-lg gap-2 flex flex-col md:items-start md:text-start">
            <li className="font-bold">Lainnya</li>
            <li>FAQ</li>
            <li>Syarat dan Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
