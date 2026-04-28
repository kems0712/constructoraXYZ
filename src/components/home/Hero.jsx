import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/70 to-secondary-900/50" />

      {/* Floating shapes for visual flair */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-primary-300 text-sm font-medium">
              +15 años de experiencia en construcción
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Construimos tus{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              sueños
            </span>{' '}
            con solidez y confianza
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary-300 leading-relaxed mb-10 max-w-2xl">
            Somos líderes en construcción civil, remodelaciones y obras de
            infraestructura. Transformamos tus ideas en proyectos exitosos con
            calidad, seguridad y puntualidad garantizada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
            >
              Solicitar Presupuesto
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/proyectos"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <FaPlay className="text-sm ml-0.5" />
              </span>
              Ver Proyectos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                200+
              </p>
              <p className="text-secondary-400 text-sm mt-1">
                Proyectos Completados
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                15+
              </p>
              <p className="text-secondary-400 text-sm mt-1">
                Años de Experiencia
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                98%
              </p>
              <p className="text-secondary-400 text-sm mt-1">
                Clientes Satisfechos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
