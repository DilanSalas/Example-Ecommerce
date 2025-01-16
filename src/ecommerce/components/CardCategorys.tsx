import { FiChevronRight, FiArrowRight } from "react-icons/fi";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Categoría 1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-15%20203552-ntFN2pEvnlFmj6GmGJga7CTzMwIxsB.png",
  },
  {
    id: 2,
    name: "Categoría 2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-15%20203552-ntFN2pEvnlFmj6GmGJga7CTzMwIxsB.png",
  },
  {
    id: 3,
    name: "Categoría 3",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-15%20203552-ntFN2pEvnlFmj6GmGJga7CTzMwIxsB.png",
  },
  {
    id: 4,
    name: "Categoría 4",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-15%20203552-ntFN2pEvnlFmj6GmGJga7CTzMwIxsB.png",
  },
];

export const CardCategorys = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Principales Categorías</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative aspect-square cursor-pointer">
            <div className="absolute inset-0 bg-gray-200 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => ((e.target as HTMLImageElement).src = "/placeholder.svg")}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between text-white">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <FiArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white flex items-center gap-2 transition-all"
        >
          VER MÁS
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
