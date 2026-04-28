import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold shadow-lg">
            Ver Proyecto
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-primary-500 rounded-full" />
          <span className="text-primary-500 text-xs font-semibold uppercase tracking-wider">
            {project.client}
          </span>
        </div>
        <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary-600 text-sm leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
