import { IoClose, IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
        <IoEllipsisVertical onClick={toggleMenu} className="md:hidden"/>
      <ul
        className={`absolute w-full h-dvh top-0 left-0 pt-10 flex-col items-center text-lg gap-6
        md:static md:flex md:flex-row md:pt-0 md:h-auto md:gap-15 fade-in
        ${isMenuOpen ? 'flex bg-primary' : 'hidden'} md:flex`}
      >
        <IoClose onClick={toggleMenu} className="md:hidden"/>
        <a className="hover:text-white hover:bg-titles px-4 py-1 rounded-xl transition" href="/">Inicio</a>
        <a className="hover:text-white hover:bg-titles px-4 py-1 rounded-xl transition" href="/proyectos">Proyectos</a>
        <a className="hover:text-white hover:bg-titles px-4 py-1 rounded-xl transition" href="/sobre-mi">Sobre mi</a>
        <a className="hover:text-white hover:bg-titles px-4 py-1 rounded-xl transition" href="/contacto">Contácto</a>
        
      </ul>
    </nav>
  );
}
