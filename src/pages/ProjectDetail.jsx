import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaUser, FaCalendarAlt, FaClock, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/mockData';
import ProjectGallery from '../components/projects/ProjectGallery';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">🏗️</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">
            Proyecto no encontrado
          </h1>
          <p className="text-secondary-600 mb-8 max-w-md mx-auto">
            Lo sentimos, el proyecto que buscas no existe o ha sido movido.
            Explora nuestro portafolio para ver todos los proyectos disponibles.
          </p>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-md"
          >
            <FaArrowLeft />
            Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero with Cover Image */}
      <section className="relative pt-24 pb-0">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm transition-colors"
              >
                <FaArrowLeft className="text-xs" />
                Volver a Proyectos
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Description & Specs */}
            <div className="lg:col-span-2">
              <h2 className="heading-secondary mb-6">
                Descripción del Proyecto
              </h2>
              <p className="text-body mb-10">{project.fullDescription}</p>

              <h3 className="text-xl font-bold text-secondary-900 mb-5">
                Especificaciones Técnicas
              </h3>
              <ul className="space-y-3 mb-10">
                {project.technicalSpecs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-secondary-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-secondary-50 rounded-2xl p-7 sticky top-28">
                <h3 className="text-lg font-bold text-secondary-900 mb-6 pb-4 border-b border-secondary-200">
                  Resumen del Proyecto
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-secondary-500 text-xs uppercase tracking-wider font-medium">
                        Cliente
                      </p>
                      <p className="text-secondary-900 font-semibold text-sm mt-0.5">
                        {project.client}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCalendarAlt className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-secondary-500 text-xs uppercase tracking-wider font-medium">
                        Fecha de Entrega
                      </p>
                      <p className="text-secondary-900 font-semibold text-sm mt-0.5">
                        {project.completionDate}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-secondary-500 text-xs uppercase tracking-wider font-medium">
                        Duración
                      </p>
                      <p className="text-secondary-900 font-semibold text-sm mt-0.5">
                        {project.duration}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-secondary-200">
                  <a
                    href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20un%20proyecto%20similar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-md text-sm"
                  >
                    Quiero un Proyecto Similar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="heading-secondary mb-8">Galería del Proyecto</h2>
          <ProjectGallery gallery={project.gallery} title={project.title} />
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
