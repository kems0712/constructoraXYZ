import { projects } from '../data/mockData';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">
            Portafolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Nuestros <span className="text-primary-400">Proyectos</span>
          </h1>
          <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
            Conoce los proyectos que hemos desarrollado con excelencia y compromiso
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
