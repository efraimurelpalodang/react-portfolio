const Navbar = () => {
  return (
    <div className="navbar py-7 flex justify-between">
      <div className="logo text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</div>
      <ul className="menu flex items-center gap-8 text-sm fixed left-1/2 -translate-x-1/2 -top-10 opacity-0 md:translate-x-0 md:static md:top-0 md:opacity-100">
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Tentang</a></li>
        <li><a href="#">Proyek</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
    </div>
  )
}

export default Navbar