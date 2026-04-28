import { services } from '../data/mockData';

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">
            Lo que hacemos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Nuestros <span className="text-primary-400">Servicios</span>
          </h1>
          <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
            Soluciones completas en construcción para cada tipo de proyecto
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="text-white text-xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una cotización personalizada sin
            compromiso. Nuestro equipo está listo para ayudarte.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-secondary-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
