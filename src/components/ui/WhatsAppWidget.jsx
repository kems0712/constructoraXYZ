import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20para%20mi%20proyecto."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300">
        <FaWhatsapp className="text-white text-2xl" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppWidget;
