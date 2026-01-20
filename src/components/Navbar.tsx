import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="navbar py-7 flex justify-between">
      <div className="logo text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
        Portfolio
      </div>
      <ul className={`menu flex items-center sm:gap-8 gap-4 sm:text-sm text-base fixed left-1/2  md:top-0 md:opacity-100 -translate-x-1/2  md:translate-x-0 md:static bg-white/30 backdrop-blur-md p-4 rounded-2xl md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
      <li>
        <a href="#">Beranda</a>
      </li>
      <li>
        <a href="#">Tentang</a>
      </li>
      <li>
        <a href="#">Proyek</a>
      </li>
      <li>
        <a href="#">Kontak</a>
      </li>
      </ul>
    </div>
  );
}

export default Navbar