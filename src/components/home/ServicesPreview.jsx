import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/mockData';

const ServicesPreview = () => {
  const previewServices = services.slice(0, 3);

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="heading-primary mt-3 mb-4">
            Soluciones integrales en{' '}
            <span className="text-primary-500">construcción</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para llevar
            tu proyecto desde la planificación hasta la entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
                    <IconComponent className="text-white text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver Todos los Servicios
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
