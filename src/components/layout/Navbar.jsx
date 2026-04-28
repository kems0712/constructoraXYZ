import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHardHat } from 'react-icons/fa';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Proyectos', path: '/proyectos' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={closeMenu}
        >
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
            <FaHardHat className="text-white text-xl" />
          </div>
          <div>
            <span
              className={`font-bold text-lg leading-none transition-colors ${
                scrolled ? 'text-secondary-900' : 'text-white'
              }`}
            >
              Constructora
            </span>
            <span className="block text-primary-500 text-xs font-semibold tracking-wider uppercase">
              XYZ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-md'
                      : scrolled
                        ? 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Cotizar Ahora
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? 'text-secondary-700 hover:bg-secondary-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-secondary-900/95 backdrop-blur-lg z-40 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {/* Close button in mobile menu */}
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-white p-2 hover:bg-white/10 rounded-lg"
            aria-label="Cerrar menú"
          >
            <FaTimes size={28} />
          </button>

          {/* Logo in mobile menu */}
          <div className="mb-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <FaHardHat className="text-white text-2xl" />
            </div>
            <div>
              <span className="text-white font-bold text-xl">Constructora</span>
              <span className="block text-primary-400 text-sm font-semibold tracking-wider uppercase">
                XYZ
              </span>
            </div>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-primary-400'
                    : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 px-8 py-3 bg-primary-500 text-white rounded-xl text-lg font-semibold hover:bg-primary-600 transition-all shadow-lg"
          >
            Cotizar Ahora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
