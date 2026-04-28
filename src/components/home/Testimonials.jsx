import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/mockData';

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="heading-primary mt-3 mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-primary-500">clientes</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor respaldo.
            Conoce las experiencias de quienes confiaron en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-secondary-50 rounded-2xl p-7 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-100"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-5">
                <FaQuoteLeft className="text-primary-500 text-sm" />
              </div>

              {/* Text */}
              <p className="text-secondary-600 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < testimonial.rating
                        ? 'text-accent-400'
                        : 'text-secondary-300'
                    }`}
                  />
                ))}
              </div>

              {/* Client info */}
              <div className="flex items-center gap-3 pt-4 border-t border-secondary-200">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.clientName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900 text-sm">
                    {testimonial.clientName}
                  </p>
                  <p className="text-secondary-500 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
