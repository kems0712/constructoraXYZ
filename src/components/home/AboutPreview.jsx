import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const features = [
  'Más de 15 años de experiencia comprobada',
  'Equipo técnico altamente calificado',
  'Materiales de primera calidad',
  'Cumplimiento garantizado de plazos',
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Equipo de construcción trabajando en obra"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <div>
                <p className="font-bold text-secondary-900 text-lg">Años</p>
                <p className="text-secondary-500 text-sm">de experiencia</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">
              Sobre Nosotros
            </span>
            <h2 className="heading-primary mt-3 mb-6">
              Excelencia en cada{' '}
              <span className="text-primary-500">proyecto</span> que
              construimos
            </h2>
            <p className="text-body mb-8">
              Somos una empresa comprometida con la excelencia en la
              construcción. Desde 2009, hemos desarrollado más de 200 proyectos
              exitosos, desde viviendas residenciales hasta grandes obras de
              infraestructura, siempre manteniendo los más altos estándares de
              calidad y seguridad.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                  <span className="text-secondary-700 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/nosotros"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Conocer Más
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
