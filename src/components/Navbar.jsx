import Logo from "../assets/Logo"
import Ham from "../assets/icon/sidebar.svg"

const Navbar = () => {
  return (
    <div className="flex justify-between pb-10 items-center">
      <img src={Ham} alt="icon" className="md:hidden" />
      <div>
        <Logo />
      </div>
      <div className="hidden md:block">
        <ul className="flex xl:gap-20 gap-12 lg:text-lg text-xs font-semibold text-secondary-500">
          <a href="beranda">Beranda</a>
          <a href="paket">Paket</a>
          <a href="kontak">Kontak Kami</a>
          <a href="tentang">Tentang Kami</a>
        </ul>
      </div>

    </div>
  )
}

export default Navbar