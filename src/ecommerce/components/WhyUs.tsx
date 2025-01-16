import { FiChevronRight, FiInfo, FiCheckCircle, FiStar, FiShield } from "react-icons/fi";

export const WhyUs = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FiInfo className="w-5 h-5" />
            <h2 className="text-3xl font-bold">¿Por qué Nosotros?</h2>
          </div>

          <div className="flex justify-center gap-8 mb-6">
            <FiCheckCircle className="w-5 h-5 text-green-600" />
            <FiStar className="w-5 h-5 text-yellow-500" />
            <FiShield className="w-5 h-5 text-blue-600" />
          </div>

          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus efficitur ex, ut mattis ipsum. Nunc tempus ante non eros bibendum commodo. Pellentesque dictum eros et magna rhoncus, eget placerat ante accumsan. Nam sed enim quam. Maecenas dignissim sit amet nisl vitae molestie. Donec sit amet tellus ac arcu blandit tempor. Nulla sed urna eget est tempus suscipit et at est.
          </p>

          <div className="flex justify-center">
            <button
              className="border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white flex items-center gap-2 transition-all"
            >
              VER MÁS
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
