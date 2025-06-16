import { IoClose, IoEllipsisVertical } from "react-icons/io5";
import { useState, useEffect } from "react";

const MenuLinks = () => {
  const [pathname, setPathname] = useState('');
  
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <>
      <a className={`px-4 py-1 rounded-xl transition ${pathname === '/' ? 'bg-titles text-white' : 'hover:text-white hover:bg-titles'}`} href="/">Inicio</a>
      <a className={`px-4 py-1 rounded-xl transition ${pathname === '/proyectos' ? 'bg-titles text-white' : 'hover:text-white hover:bg-titles'}`} href="/proyectos">Proyectos</a>
      <a className={`px-4 py-1 rounded-xl transition ${pathname === '/sobre-mi' ? 'bg-titles text-white' : 'hover:text-white hover:bg-titles'}`} href="/sobre-mi">Sobre mi</a>
      <a className={`px-4 py-1 rounded-xl transition ${pathname === '/contacto' ? 'bg-titles text-white' : 'hover:text-white hover:bg-titles'}`} href="/contacto">Contácto</a>
    </>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <IoEllipsisVertical onClick={toggleMenu} className="md:hidden"/>
      
      {/* Menú móvil */}
      <ul className={`absolute w-full h-dvh top-0 left-0 pt-10 flex-col items-center animate-fade-in text-lg gap-6 md:hidden
        ${isMenuOpen ? 'flex bg-primary' : 'hidden'}`}>
        <IoClose onClick={toggleMenu} className="md:hidden"/>
        <MenuLinks />
      </ul>

      {/* Menú desktop */}
      <ul className="hidden md:flex md:flex-row md:gap-15">
        <MenuLinks />
      </ul>
    </nav>
  );
}
