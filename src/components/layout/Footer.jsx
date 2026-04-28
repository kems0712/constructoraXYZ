import { Link } from 'react-router-dom';
import { FaHardHat, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const quickLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Proyectos', path: '/proyectos' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <FaHardHat className="text-white text-xl" />
              </div>
              <div>
                <span className="font-bold text-lg leading-none">
                  Constructora
                </span>
                <span className="block text-primary-400 text-xs font-semibold tracking-wider uppercase">
                  XYZ
                </span>
              </div>
            </div>
            <p className="text-secondary-400 text-sm leading-relaxed">
              Más de 15 años construyendo sueños con calidad, seguridad y
              compromiso. Líderes en construcción civil, remodelaciones y
              obras de infraestructura.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Construcción Civil',
                'Remodelaciones',
                'Obras Civiles',
                'Acabados',
                'Diseño Arquitectónico',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/servicios"
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-secondary-400 text-sm">
                  Av. Principal #123, Zona Industrial,
                  <br />
                  Ciudad Capital, CP 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                >
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@constructoraxyz.com"
                  className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                >
                  info@constructoraxyz.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-secondary-500 text-sm">
            © {currentYear} Constructora XYZ. Todos los derechos reservados.
          </p>
          <p className="text-secondary-600 text-xs">
            Construyendo con excelencia desde 2009
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
