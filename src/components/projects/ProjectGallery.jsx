import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectGallery = ({ gallery, title }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % gallery.length);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt={`${title} - Imagen ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/30 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-primary-500 px-4 py-2 rounded-lg shadow-lg">
                Ver Imagen
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Cerrar galería"
          >
            <FaTimes size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute left-4 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Imagen anterior"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Image */}
          <img
            src={gallery[activeIndex]}
            alt={`${title} - Imagen ${activeIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute right-4 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Siguiente imagen"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full">
            {activeIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
