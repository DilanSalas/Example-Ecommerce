
import { FaArrowRight } from 'react-icons/fa';

export const OfferCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-8 gap-8 bg-white shadow-md rounded-lg">
      {/* Left side - Placeholder product image */}
      <div className="w-full md:w-1/2">
        <div className="bg-gray-200 aspect-square w-full rounded-lg"></div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">Oferta Exclusiva</h2>
        
        <p className="text-gray-700 leading-relaxed">
          ¡No te pierdas esta increíble oferta! Obtén un descuento especial en productos seleccionados. 
          Solo por tiempo limitado, ¡aprovecha ahora!
        </p>

        <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors rounded-md">
          Compra Ahora
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

