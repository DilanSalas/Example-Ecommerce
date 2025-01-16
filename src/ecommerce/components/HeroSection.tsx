export const HeroSection = () => {
    return (
      <section className="relative w-full min-h-[600px] bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Texto sobre la promesa de tu negocio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Descripción sobre lo que se dedica tu empresa y cómo ofreces resultados a tus clientes.
          </p>
          <div>
            <button className="px-6 py-3 text-sm md:text-base bg-black text-white hover:bg-gray-800 transition-colors duration-200">
              Call To Action
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  